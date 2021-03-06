import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        value: ''
    }

    timeout = null;

    doSearch = (event) => {
        const { callback } = this.props;

        this.setState({ value: event.target.value });
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            callback(false, this.state.value);
        }, 500);
    }

    render() {
        return (
            <div className="mi-searchbar">
                <div className="mi-searchbar-content">
                    <FontAwesome className="mi-fa-search" name="search" size="2x" />
                    <input
                        type="text"
                        className="mi-searchbar-input"
                        placeholder="Search"
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar;