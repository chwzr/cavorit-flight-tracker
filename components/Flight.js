import React, { Component } from 'react';

class Flight extends Component {

    render(){
        const { children } = this.props;
        return (
            <div className="flight">
                {children}
            </div>
          );
    }
}

export default Flight
