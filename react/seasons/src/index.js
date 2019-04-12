
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// state must be initialzed when a compenent is created
// state can only be updated using the function setState();
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null
        };

        
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ 
                    lat: position.coords.latitude
                });
                // we did not do this:
                //      this.state.lat = position.coords.latitude.
            },
            (err) => console.log(err)
        );
    }


    // React says we have to define render
    render() {

        return (
            <div>Latitude: {this.state.lat}</div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
