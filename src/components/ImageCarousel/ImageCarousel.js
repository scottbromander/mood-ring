import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import Tags from '../Tags/Tags';
import './ImageCarousel.css';

class ImageCarousel extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_IMAGES', payload: this.props.reduxState.currentImage + 1});
    }

    onNextClick = (event) => {
        let payload = 0;

        if (this.props.reduxState.currentImageReducer + 1 > this.props.reduxState.imagesReducer.length - 1) {
            payload = 0;
        } else {
            payload = this.props.reduxState.currentImageReducer + 1;
        }

        this.props.dispatch({ type: 'GET_CURRENT_IMAGE', payload: payload });
    }

    onPrevClick = (event) => {
        let payload = 0;

        if (this.props.reduxState.currentImageReducer - 1 < 0) {
            payload = this.props.reduxState.imagesReducer.length - 1;
        } else {
            payload = this.props.reduxState.currentImageReducer - 1;
        }

        this.props.dispatch({ type: 'GET_CURRENT_IMAGE', payload: payload });
    }

    render() {
        const currentImageIndex = this.props.reduxState.currentImageReducer;
        const currentImage = this.props.reduxState.imagesReducer[currentImageIndex];

        let renderedImage = <div></div>;
        if(currentImage) {
            renderedImage = (
                <div>
                    <img src={currentImage.path} />
                    <h2>{currentImage.title}</h2>
                </div>
            )
        }

        return (
            <div>
                {renderedImage}
                <button onClick={this.onPrevClick}>Prev</button>
                <button onClick={this.onNextClick}>Next</button>
                <Tags />
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(ImageCarousel);