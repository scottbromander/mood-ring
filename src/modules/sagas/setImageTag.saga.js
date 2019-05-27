import Axios from 'axios';
import { put } from 'redux-saga/effects';

function* setImageTag(action) {
    const imageId = action.payload.imageId;
    try {
        yield Axios.post('/imagetags', action.payload);
        yield put({
            type: 'GET_CURRENT_TAGS',
            payload: imageId,
        });
    } catch (error) {
        console.log('error HELP:', error);
    }
}

export default setImageTag;