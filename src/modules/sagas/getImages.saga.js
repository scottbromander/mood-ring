import Axios from 'axios';
import { put } from 'redux-saga/effects';

function* getImages(action) {
    try {
        let response = yield Axios.get('/image');
        yield put({type: 'SET_IMAGES', payload: response.data});
    } catch (error) {
        console.warn(`Error: ${error}`);
    }
}

export default getImages;