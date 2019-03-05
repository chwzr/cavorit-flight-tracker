import React, { Component } from 'react';
import fake from '../fake';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {format} from 'date-fns';

import fetch from 'isomorphic-unfetch';

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

class Flight extends Component {

    state = {
        trackData: []
    }

    componentDidMount(){
        this.updateFlightTrack();
        //TODO: 5 or 10 secs?
        this.trackPollInterval = setInterval(this.updateFlightTrack.bind(this), 5000);
    }

    componentWillUnmount(){
        console.log("clearing")
        clearInterval(this.trackPollInterval)
    }

    async updateFlightTrack(){
        var trackData
        console.log()
        return fetch(this.props.flight.trackUrl, { headers: { 'origin': 'x-requested-with'} })
            .then(res => res.json())
            .then(res => {
                if(res.icao24){
                    trackData = pathArrayToObject(res.path);
                }
            })
            .then(()=>{
                this.setState({
                    trackData
                })
            })
            .catch((error) => {
                console.log(error.message)
                if(!this.state.trackData.length > 0){
                    this.setState({
                        trackData: fake
                    })
                } else {
                    //just push a random fake point to trackdata
                    let random = (Math.random() * (fake.length - 1 + 1) ) << 0;
                    this.setState({
                        trackData: [...this.state.trackData, fake[random]]
                    })
                    console.log("💩-API!")
                }
            })
    }


    render(){
        const { flight, open, children } = this.props;
        let chartData = pathArrayToObject(flight.path);
        return (
            <div className="flight">
                {children}
                <div  style={{zIndex: this.state.open ? 99999999999999999 : 1}}  className={open ? 'plane-info open': 'plane-info'}>
                    <div className="info-top">
                        <h2 className="hlght">{flight.callsign ? flight.callsign :flight.icao24 }</h2>
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

                    <LineChart width={300} height={150} data={this.state.trackData}
                                margin={{top: 10, right: 10, left: -15, bottom: 10}}>
                        <XAxis dataKey="time"/>
                        <YAxis/>
                        {/* <CartesianGrid strokeDasharray="1 1" /> */}
                        <Tooltip 
                            labelStyle={{
                                background: '#262626'
                            }}
                            contentStyle={{
                                background: '#262626'
                            }}
                        />
                        {/* <Legend /> */}
                        <Line dot={false} type="monotone" dataKey="barAlt" stroke="#14736F" />
                    </LineChart>

                </div>
            </div>
          );
    }
}

export default Flight
