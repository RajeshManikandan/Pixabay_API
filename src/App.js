import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Navbar />
                    <Search />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
