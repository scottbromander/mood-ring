import Axios from 'axios';
import { put } from 'redux-saga/effects';

function* getTags() {
    try {
        const response = yield Axios.get('/tags');
        yield put({type: 'SET_TAGS', payload: response.data});
    } catch (error) {
        console.warn(`Error: ${error}`);
    }
}

export default getTags;