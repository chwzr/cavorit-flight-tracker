import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Config from '../config';
import fetch from 'isomorphic-unfetch';
import GoogleMapReact from 'google-map-react';
import Flight from '../components/Flight';
import fake from '../fake';
// import {format} from 'date-fns';
import { reject } from 'any-promise';
import axios from 'axios';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {format, subMinutes} from 'date-fns';
/**
 * Converts a flight info array in a semantic readable Object
 * @param {*} arr 
 * @param {*} time 
 * @returns {*} flight
 */
function flightArrayToObject(arr, time){
  if(!arr) return false
  if(!time) return false
  const flight = {
    icao24: arr[0],
    callsign: arr[1],
    lat: arr[6],
    lng: arr[5],
    barAlt: arr[7],
    geoAlt: arr[13],
    time
  }
  return flight;
}


/**
 * Takes a Path Array from API and returns a semantic and readable Array of Objects
 * @param {*} path
 * @returns {*} formatedPaths
 */
function pathArrayToObject(path){
  if(!path) return []
  let formatedPaths = [];
  path.forEach(p=>{
      formatedPaths .push({
          time: format(new Date(p[0]*1000), 'HH:mm'),
          barAlt: p[3] ? p[3] : 0,
          lat: p[1],
          lng: p[2],
      })
  })
  return formatedPaths
}

// 💩-api not sending a cors header? - no problem 😎
const API = axios.create({
  baseURL: Config.proxyApiUrl,
  timeout: 1000,
  headers: { 'X-Requested-With': 'XMLHttpRequest'}
});

const updateApi = axios.create({
  baseURL: Config.authApiUrl,
  timeout: 1000,
});


class App extends Component {

  state = {
    flightList : [],
    openFlight: false,
    center: { lat: 52.52000659999999, lng: 13.404954 },
    zoom: 10,
    bounds: {
      northeast: {lat: 52.6754542, lng: 13.7611175},
      southwest: {lat: 52.338234, lng: 13.088346}
    },

  }
  isMounted = true

  static async getInitialProps(context) {
    const locationSlug = context.query.slug;
    console.log("setinitprops")
    return {  locationSlug};
  }

  async componentDidMount(){
    await this.initFlightList();
    this.updatePoll = setInterval(this.updateFlightList.bind(this), 3000)
    let locationData = await this.getPositionData(this.props.locationSlug ? this.props.locationSlug : "Berlin")
    if(locationData.geometry){
      this.setState({
        center: locationData.geometry.location,
        bounds: locationData.geometry.bounds
      })
    }
  }
  
  componentWillUnmount(){
    this.isMounted = false;
  }

  async getPositionData(locationSlug){
      console.log(locationSlug)
      // get the userlocation based of the url slug .../<location> (defaults to berlin for demo reasons) 
      //TODO: rewrite with axios
      const locationRequest = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?&key=AIzaSyDUGpUnqLVJtzfGuH_ZqbN9eLLgA5wMEis&address=${locationSlug}`)
      const locationResponse = await locationRequest.json()
      const locationData = locationResponse .results[0];
      return locationData
  }

  async initFlightList(){
    // get all 🚀 based on the location bounds
    let bounds = this.state.bounds;
    //TODO: rewrite with axios
    const flightAreaListRequest = await fetch(`${Config.proxyApiUrl}/states/all?lamin=${bounds.southwest.lat}&lomin=${bounds.southwest.lng}&lamax=${bounds.northeast.lat}&lomax=${bounds.northeast.lng}`, { headers: {'X-Requested-With': 'XMLHttpRequest'} });
    try{
      const flightAreaListResponse = await flightAreaListRequest.json();
      if(!flightAreaListResponse.states) {
        return
      }
      const flightAreaList = flightAreaListResponse.states.map(flight => flightArrayToObject(flight, flightAreaListResponse.time));
      this.setState({
        flightList: flightAreaList
      });
      console.log("starting to poll for flights")
      
    } catch(error){
      // console.log(error.message)
      //retry if failed
      console.log("retry init")
      this.initFlightList();
    }
  }

  async updateAreaList(bounds){
    //TODO: rewrite with axios
    const flightAreaListRequest = await fetch(`${Config.proxyApiUrl}/states/all?lamin=${bounds.southwest.lat}&lomin=${bounds.southwest.lng}&lamax=${bounds.northeast.lat}&lomax=${bounds.northeast.lng}`, { headers: {'X-Requested-With': 'XMLHttpRequest'} });
    try{
      const flightAreaListResponse = await flightAreaListRequest.json();
      if(!flightAreaListResponse.states) {
        return
      }
      const flightAreaList = flightAreaListResponse.states.map(flight => flightArrayToObject(flight, flightAreaListResponse.time));

      //remove flights which are not in bounds anymore
      // UNCOMMENT this to keep memory footprint small... (it will disable  "persistence" of chartdata when moving items from the map)
      // this.setState(state => {
      //   let icaos = flightAreaList.map(f=>f.icao24);
      //   const flightList = state.flightList.filter((f) => !icaos.includes(f.icao24));
      //   return {flightList,};
      // });
      
      //add flights which are new
      this.setState(state => {
        let oldIcaos = state.flightList.map(f=>f.icao24)
        let newFlights =  flightAreaList.filter(f => !oldIcaos.includes(f.icao24))
        const flightList = [...state.flightList, ...newFlights]
        return {flightList,}
      })
    } catch {
      // request failed
    }
  }

  async updateFlightList(){
    this.setState(async state=>{

      const b = this.state.bounds;
      const update = await updateApi.get(`${b.northeast.lat}/${b.northeast.lng}/${b.southwest.lat}/${b.southwest.lng}`,)
      const newFlights = update.data;

      const flightList = state.flightList.map((flight)=>{
        Object.keys(newFlights).forEach(key=>{
          if(flight.icao24.toUpperCase() == newFlights[key][0] ){
            if(!flight.path) flight.path = [];
            flight.lat = newFlights[key][1];
            flight.lng = newFlights[key][2];
            flight.barAlt = newFlights[key][4];
            let newPathVector = {
              time: format(new Date(), 'HH:mm:ss'),
              barAlt: newFlights[key][4],
              lat: newFlights[key][1],
              lng: newFlights[key][2],
            }
            console.log("Update Flight:", flight.callsign)
            flight.path.push(newPathVector);
          }
        })
        return flight;
      })

      return flightList
    });
  }



  async updateFlightTrack(url){
    var trackData;
    return await fetch(url, {headers: { 'X-Requested-With': 'XMLHttpRequest'} })
        .then(res => res.json())
        .then(res => {
            if(res.icao24){
                trackData = pathArrayToObject(res.path);
            }
        })
        .then(()=>{
            return trackData
        })
        .catch((error) => {
            console.log('💩API:',error.message)
            return false            
        })
  }

  _onBoundsChange = (center, zoom, bounds) => {
    let newBounds = {
      northeast: {lat:bounds[6], lng:bounds[7]},
      southwest: {lat:bounds[4], lng:bounds[5]}
    };
    this.setState({
      bounds: newBounds
    });
    this.updateAreaList(newBounds);
  }

  _onChildClick = (key, childProps) => {
    //sets current open info window
    this.setState({
      center: {
        lat: childProps.flight.lat,
        lng: childProps.flight.lng
      },
      openFlight: childProps.flight.icao24
    })
  }

  render() {
    // map flights to Map Marker DOM
    //ensure the open flightpanel is the last in the array
    let flightList;
    if(this.state.openFlight){
        flightList = this.state.flightList;
        let i = flightList.findIndex(f=>f.icao24 == this.state.openFlight);
        flightList.push(flightList[i]);
        flightList.splice(i,1);
    } else {
      flightList = this.state.flightList
    }

    const flights = flightList.map(flight=>{
        return (
            <Flight 
              style={{height: 100, width: 100, zIndex: this.state.openFlight == flight.icao24 ? 9999999: 100}}
              open={this.state.openFlight == flight.icao24}
              key={flight.icao24}
              lat={flight.lat}
              lng={flight.lng}
              flight={flight}
              >
                <svg style={{zIndex: 1}} version="1" width="48" height="48" className="plane-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400.156 400.155">
                    <path  d="M396 50c6-19 5-33-3-43-10-8-24-9-42-3-19 6-35 16-49 31l-46 45L66 35c-3-1-6 0-9 2L21 74c-2 2-3 4-3 8 1 3 2 5 5 6l145 80-74 74-55-15h-2c-3 0-5 0-7 2L3 257c-2 2-3 4-3 7s2 5 4 7l72 53 54 72c1 3 4 4 6 4h1l7-2 27-28c3-3 3-5 2-9l-15-55 74-74 80 145c1 2 3 4 6 5h2l5-2 37-27c3-3 4-6 3-10l-45-198 45-46c15-15 25-31 31-49z"/>
                </svg>
                <div className={this.state.openFlight == flight.icao24 ? 'plane-info open': 'plane-info'}>
                    <div className="info-top">
                        <h2 className="hlght">{flight.callsign ? flight.callsign : flight.icao24 }</h2>
                        <svg  className="api-svg" viewBox="0 0 100 100"><circle r="24" cy="26" cx="50" fill="#1A1A1A"></circle><circle className="progress-svg" r="18" cy="26" cx="50" fill="transparent" stroke="#00BCFF" strokeWidth="8"></circle></svg>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="hlght">LAT</td>
                                    <td>{flight.lat}</td>
                                </tr>
                                <tr>
                                    <td className="hlght">LNG</td>
                                    <td>{flight.lng}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="hlght">ALT</td>
                                    <td>{flight.geoAlt ? flight.geoAlt : 0}</td>
                                </tr>
                                <tr>
                                    <td className="hlght">TRANS</td>
                                    <td>{flight.icao24}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                        {/* Math.random() as key forces react dom to rerender.. 
                        this is only needed bc the chartdata is in a deeply nested array. 
                        I would use redux for state management if I had more time...  */}

                          <LineChart key={Math.random()}  width={300} height={150} data={flight.path ? flight.path : [{time: 0, barAlt:0}, {time: 1, barAlt:0} ] }
                                      margin={{top: 10, right: 10, left: -10, bottom: 10}}>
                              <XAxis dataKey="time"/>
                              <YAxis/>
                              <Tooltip 
                                  labelStyle={{
                                      background: '#262626'
                                  }}
                                  contentStyle={{
                                      background: '#262626',
                                      borderColor: '#7697AA'
                                  }}
                              />
                              <Line key={Math.random()} isAnimationActive={false} dot={false} type="monotone" dataKey="barAlt" stroke="#14736F" />
                          </LineChart>

                </div>
            </Flight>
        )
    })

    return (
      <Layout>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDUGpUnqLVJtzfGuH_ZqbN9eLLgA5wMEis' }}
            center={{
              lat: this.state.center.lat,
              lng: this.state.center.lng
            }}
            defaultZoom={this.state.zoom}
            options={{
              styles: Config.mapStyles,
              disableDefaultUI: true,
              clickableIcons: false 
            }}
            hoverDistance={50}
            onBoundsChange={this._onBoundsChange.bind(this)}
            onChildClick={this._onChildClick.bind(this)}
            overlayViewDivStyle={{zIndex: 100}}
          >
            {flights}
          </GoogleMapReact>
        </div>
      </Layout>
    );
  }
}

export default PageWrapper(App);
