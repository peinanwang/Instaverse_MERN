const storyReduer = (state=[], action) => {
    switch (action.type) {
        case "FETACH_ALL_STORIES":
        case "CREATE_STORY":
            return state;
        
        default:
            return state;
    }
};

export default storyReduer;