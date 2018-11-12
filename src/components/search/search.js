import React, { Component } from 'react';
import { TextField, MenuItem, Select, InputLabel } from '@material-ui/core';
import axios from 'axios';
import ImageResults from '../search-results/imageResults';

class Search extends Component {
    state = {
        searchText: '',
        amount: 10,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '10655541-9e3f36013cc97cd1be5f70a1c',
        images: []
    };

    onTextChange = e => {
        const { apiUrl, apiKey, amount, searchText } = this.state;
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
            if (val === '') {
                this.setState({ images: [] });
            } else {
                axios
                    .get(`${apiUrl}?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}`)
                    .then(res => this.setState({ images: res.data.hits }))
                    .catch(err => console.log(err));
            }
        });
    };
    onAmountChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <TextField
                    id="standard-with-placeholder"
                    label="Search Text"
                    placeholder="Search for Images"
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    fullWidth={true}
                />
                <br />
                <InputLabel htmlFor="name-readonly">Amount</InputLabel>
                <Select name="amount" label="Select Amount" value={this.state.amount} onChange={this.onAmountChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
                <ImageResults images={this.state.images} />
            </div>
        );
    }
}

export default Search;
