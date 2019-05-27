import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

// REDUCERS
import imagesReducer from './modules/reducers/image.reducer';
import tagsReducer from './modules/reducers/tags.reducer';
import currentImageReducer from './modules/reducers/currentImage.reducer';
import currentTagsReducer from './modules/reducers/currentTags.reducer';

// SAGAS
import getImages from './modules/sagas/getImages.saga';
import getTags from './modules/sagas/getTags.saga';
import setImageTag from './modules/sagas/setImageTag.saga';
import getCurrentTags from './modules/sagas/getCurrentTags.saga';
import getCurrentImage from './modules/sagas/getCurrentImage.saga';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_IMAGES', getImages);
    yield takeEvery('GET_TAGS', getTags);
    yield takeEvery('SET_IMAGE_TAG', setImageTag);
    yield takeEvery('GET_CURRENT_TAGS', getCurrentTags);
    yield takeEvery('GET_CURRENT_IMAGE', getCurrentImage);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        imagesReducer,
        tagsReducer,
        currentImageReducer,
        currentTagsReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();