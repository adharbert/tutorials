
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// state must be initialzed when a compenent is created
// state can only be updated using the function setState();
class App extends Component {
    state = { lat: null, errorMessage: '' };


    componentDidMount() {
        console.log('My component was rendered to the screen');        
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }), 
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');
    }

    contentRendered() {
        let displayItem = <Spinner text="Please accept location request" />;
        if (this.state.errorMessage && !this.state.lat) {
            displayItem = <div>Error: {this.state.errorMessage}</div> ;
        } else if (!this.state.errorMessage && this.state.lat) {
            displayItem = <SeasonDisplay lat={this.state.lat} />
        }
        return displayItem;
    };

    // React says we have to define render
    render() {

        

        return (
            <div className="border red">
                {this.contentRendered()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
