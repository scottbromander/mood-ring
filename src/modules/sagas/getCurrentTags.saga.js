import Axios from 'axios';
import { put } from 'redux-saga/effects';

function* getCurrentTags(action) {
    try {
        const response = yield Axios.get('/imagetags/' + action.payload);
        yield put({
            type: 'SET_CURRENT_TAGS',
            payload: response.data
        });
    } catch (error) {
        console.log('error HELP:', error);
    }
}

export default getCurrentTags;