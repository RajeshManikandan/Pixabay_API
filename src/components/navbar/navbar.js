import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';

class Navbar extends Component {
    render() {
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;
