import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './layouts/Header';
import Footer from './layouts/Footer';


import '../assets/css/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Provider store={store}>
                    <Router>
                        <div>
                            Hello
                        </div>
                    </Router>
                </Provider>
                <Footer />
            </div>
        );
    }
}

export default App;