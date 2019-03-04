import React, { Component } from 'react';


class FlightInfo extends Component {

    render(){
        const { flight } = this.props;

        return (
            <div    
                lat={flight.lat}
                lng={flight.lng}
                >
                <svg version="1" className="plane-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400.156 400.155">
                    <path  d="M396 50c6-19 5-33-3-43-10-8-24-9-42-3-19 6-35 16-49 31l-46 45L66 35c-3-1-6 0-9 2L21 74c-2 2-3 4-3 8 1 3 2 5 5 6l145 80-74 74-55-15h-2c-3 0-5 0-7 2L3 257c-2 2-3 4-3 7s2 5 4 7l72 53 54 72c1 3 4 4 6 4h1l7-2 27-28c3-3 3-5 2-9l-15-55 74-74 80 145c1 2 3 4 6 5h2l5-2 37-27c3-3 4-6 3-10l-45-198 45-46c15-15 25-31 31-49z"/>
                </svg>

            </div>
          );
    }
}



export default FlightInfo
