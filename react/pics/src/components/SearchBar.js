import React, { Component } from 'react'

class SearchBar extends Component {

    state = { term: ''};


    onInputChange(event) {
        console.log(event.target.value);
    }

    /*
    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.term);
    }
    */

    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.term);

        // Since this is a Class componet and not a functional, props passed in are accessed as this.props
        this.props.onSubmit(this.state.term);
    };


    render() {


        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                {/* <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>   // This can be used with commented out function above */}
                {/* <form className="ui form" onSubmit={(event) => this.onFormSubmit()}> // This can be used with commented out function above */}
                    <div className="field">
                        <label>Image Search</label>
                        {/*<input type="text" onChange={this.onInputChange} />  */}
                        {/* 
                            this.onInputChange does not have the () because we don't want it to be called on Render.  
                            this will pass onInputChange into the input element to use when it is fired on change.
                          */}  
                        <input  type="text" 
                                placeholder="enter search item"
                                value={this.state.term}
                                onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>            
                </form>    
            </div>
        );
    }
}

export default SearchBar
