import React, { Component } from 'react';


class SearchBar extends  Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input 
                    //by setting value to this.state.term -- input is now a controlled component
                    //controlled component is when value is set to state
                    value={this.state.term} 
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        )
    }


}

export default SearchBar;