const currentImageReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_CURRENT_TAGS':
            return action.payload;
        default:
            return state;
    }
}

export default currentImageReducer;