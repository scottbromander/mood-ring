import Axios from 'axios';
import { put } from 'redux-saga/effects';

function* getCurrentImage(action) {
    try {
        const response = yield Axios.get('/imagetags/' + (action.payload + 1));
        yield put({
            type: 'SET_CURRENT_TAGS',
            payload: response.data
        });
    } catch (error) {
        console.log('error HELP:', error);
    }
}

export default getCurrentImage;