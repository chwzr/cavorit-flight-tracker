import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Config from '../config';
import fetch from 'isomorphic-unfetch';
import GoogleMapReact from 'google-map-react';
import FlightInfo from '../components/FlightInfo';
import Flight from '../components/Flight';


/**
 * Converts a flight info array in a semantic readable Object
 * @param {*} arr 
 * @param {*} time 
 * @returns {*} flight
 */
function flightArrayToObject(arr, time){
  // let altitudeHistory = getAltitudeHistoryObject(arr, time);
  const flight = {
    icao24: arr[0],
    callsign: arr[1],
    lat: arr[6],
    lng: arr[5],
    barAlt: arr[7],
    geoAlt: arr[13],
    // altitudeHistory: [altitudeHistory],
    time
  }
  return flight;
}


var flightPollInterval;

class App extends Component {

  state = {
    flightList : [],
    openFlight: false,
    center: { lat: 52.52000659999999, lng: 13.404954 },
    zoom: 11,
    bounds: {
      northeast: {lat: 52.6754542, lng: 13.7611175},
      southwest: {lat: 52.338234, lng: 13.088346}
    },

  }



  async getPositionData(){
      // get the userlocation based of the url slug .../<location> (defaults to berlin for demo reasons) 
      const locationRequest = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?&key=AIzaSyDUGpUnqLVJtzfGuH_ZqbN9eLLgA5wMEis&address=${this.props.locationSlug}`)
      const locationResponse = await locationRequest.json()
      const locationData = locationResponse .results[0];
      return locationData
  }



  async updateFlightList(){
    // get all 🚀 based on the location bounds
    let bounds = this.state.bounds;
    const flightAreaListRequest = await fetch(`${Config.apiUrl}/states/all?lamin=${bounds.southwest.lat}&lomin=${bounds.southwest.lng}&lamax=${bounds.northeast.lat}&lomax=${bounds.northeast.lng}`);
    const flightAreaListResponse = await flightAreaListRequest.json();
    // console.log(flightAreaListResponse)
    if(!flightAreaListResponse.states) {
      return
    }
    const flightAreaList = flightAreaListResponse.states.map(flight => flightArrayToObject(flight, flightAreaListResponse.time));
    // create the apiUrl to poll for 🚀-Track data
    flightAreaList.forEach((flight, i)=>{
      // api not sending a cors header? - no problem 😎
      flightAreaList[i].trackUrl = `https://xcors.felixkoppe.com/https://opensky-network.org/api/tracks/?icao24=${flight.icao24}`
    });
    // set location of opened flight to center map (🚀 follow feature)
    let i = flightAreaList.findIndex(flight => flight.icao24 === this.state.openFlight)

    if(flightAreaList[i]){
      // console.log("following plane")
      // this.setState({
      //   center: {
      //     lat: flightAreaList[i].lat,
      //     lng: flightAreaList[i].lng
      //   }
      // })
    }
    this.setState({
      flightList: flightAreaList
    });
  }


  static async getInitialProps(context) {
    const locationSlug = context.query.slug;
    return {  locationSlug};
  }



  componentDidMount(){
    // await this.getPositionData();

    this.flightPollInterval = setInterval(this.updateFlightList.bind(this), 1000)
    // trackPollInterval = setInterval(this.updateFlightTracks.bind(this), 3000)

  }

  
  
  componentWillUnmount(){
    clearInterval(this.flightPollInterval)
  }

  _onBoundsChange = (center, zoom, bounds, marginBounds) => {
    let newBounds = {
      northeast: {lat:bounds[6], lng:bounds[7]},
      southwest: {lat:bounds[4], lng:bounds[5]}
    }
    // console.log(this.state.bounds, bounds)
    this.setState({
      bounds: newBounds
    })
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
    const flights = this.state.flightList.map(flight=>{
      if(flight) {
        return (
            <Flight 
              style={{height: 100, width: 100 }}
              open={this.state.openFlight == flight.icao24}
              key={flight.icao24}
              lat={flight.lat}
              lng={flight.lng}
              flight={flight} 
              >
                <svg style={{zIndex: 1}} version="1" width="48" height="48" className="plane-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400.156 400.155">
                    <path  d="M396 50c6-19 5-33-3-43-10-8-24-9-42-3-19 6-35 16-49 31l-46 45L66 35c-3-1-6 0-9 2L21 74c-2 2-3 4-3 8 1 3 2 5 5 6l145 80-74 74-55-15h-2c-3 0-5 0-7 2L3 257c-2 2-3 4-3 7s2 5 4 7l72 53 54 72c1 3 4 4 6 4h1l7-2 27-28c3-3 3-5 2-9l-15-55 74-74 80 145c1 2 3 4 6 5h2l5-2 37-27c3-3 4-6 3-10l-45-198 45-46c15-15 25-31 31-49z"/>
                </svg>
            </Flight>
        )
      }
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
            onBoundsChange={this._onBoundsChange}
            onChildClick={this._onChildClick.bind(this)}
          >

            {flights}

          </GoogleMapReact>
        </div>
      </Layout>
    );
  }
}

export default PageWrapper(App);
