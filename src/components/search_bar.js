import React, { Component } from 'react';


class SearchBar extends  Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
    }

    render() {
        return (
            <div className='search-bar'>
                <input 
                    //by setting value to this.state.term -- input is now a controlled component
                    //controlled component is when value is set to state
                    value={this.state.term} 
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;