import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import './Tags.css';

class Tags extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_TAGS'});
        this.props.dispatch({type: 'GET_CURRENT_TAGS', payload: this.props.reduxState.currentImageReducer + 1});
    }

    onTagClick = (event) => {
        const payload = {
            imageId: this.props.reduxState.currentImageReducer + 1,
            tagId: parseInt(event.target.dataset.id),
        }
        this.props.dispatch({type: 'SET_IMAGE_TAG', payload: payload});
    }

    render() {
        const tagArray = this.props.reduxState.tagsReducer.map((item, index) => {
            return (
                <button key={index} data-id={item.id} onClick={this.onTagClick} className="tag">
                    {item.name}
                </button>
            )
        })

        const selectedTagsArray = this.props.reduxState.currentTagsReducer.map((item, index) => {
            return (
                <p key={index}>{item.name}</p>
            )
        })

        return (
            <div>
                {tagArray}
                {selectedTagsArray}
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Tags);