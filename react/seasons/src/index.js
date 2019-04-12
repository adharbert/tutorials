
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// state must be initialzed when a compenent is created
// state can only be updated using the function setState();
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        };

                    /*
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}
            </div>
            */
        
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // console.log(position)
                this.setState({ 
                    lat: position.coords.latitude
                });
                // we did not do this:
                //      this.state.lat = position.coords.latitude.
            },
            (err) => {
                //console.log(err)
                this.setState({ errorMessage: err.message });
            }
        );
    }


    // React says we have to define render
    render() {

        let displayItem = <div>waiting...</div>;
        if (this.state.errorMessage && !this.state.lat) {
            displayItem = <div>Error: {this.state.errorMessage}</div> ;
        } else if (!this.state.errorMessage && this.state.lat) {
            displayItem = <div>Latitude: {this.state.lat}</div>
        }

        return (
            <div>
                {displayItem}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
