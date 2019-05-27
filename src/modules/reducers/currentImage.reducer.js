const currentImageReducer = (state = 0, action) => {
    switch(action.type) {
        case 'GET_CURRENT_IMAGE':
            return action.payload;
        default:
            return state;
    }
}

export default currentImageReducer;