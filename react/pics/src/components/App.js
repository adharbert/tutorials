import React, { Component } from 'react'
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
    state = { images: [] };

    
    // async onSearchSubmit(term) {        
    onSearchSubmit = async (term) => {
        // using async / await syntax    
        const response = await unsplash.get('/search/photos', {
            params: { query: term},            
        });
        this.setState({ images: response.data.results });
        
    }

    /*
    onSearchSubmit(term) {        
        // using a promise
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 4dd6364bb3780f0b8f3cc982276cf1a553106b6a917b66e8540d0e00546a7570'
            }
        }).then((response) => {
            console.log(response.data.results);
        });
    }
    */

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;