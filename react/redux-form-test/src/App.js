import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import NewForm from './components/NewForm';

class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <Router>
            <div className="container">
              <Route exact path="/" component={NewForm} />
            </div>
          </Router>
        </Provider>
      )
    }
}

export default App
