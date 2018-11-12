import React, { Component } from 'react';
import { GridListTile, GridList, GridListTileBar } from '@material-ui/core';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ZoomIn from '@material-ui/icons/ZoomIn';
import { Dialog, DialogActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class ImageResults extends Component {
    state = {
        open: false,
        dialogImg: ''
    };

    handleOpen = img => {
        this.setState({ open: true, dialogImg: img });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        let imageListContent;
        const { images } = this.props;
        if (images) {
            imageListContent = (
                <GridList cols={3}>
                    {images.map(img => (
                        <GridListTile key={img.id}>
                            <img src={img.largeImageURL} alt="" />
                            <GridListTileBar
                                title={img.tags}
                                subtitle={
                                    <span>
                                        by <strong>{img.user}</strong>
                                    </span>
                                }
                                actionIcon={
                                    <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                        <ZoomIn style={{ color: '#fff' }} />
                                    </IconButton>
                                }
                            />
                            />
                        </GridListTile>
                    ))}
                </GridList>
            );
        } else {
            imageListContent = null;
        }

        return (
            <div>
                {imageListContent}
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <img src={this.state.dialogImg} alt="" style={{ width: '100%', maxHeight: '600px' }} />
                    <DialogActions>
                        <Button variant="contained" color="primary" size="small" onClick={this.handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
};

export default ImageResults;
