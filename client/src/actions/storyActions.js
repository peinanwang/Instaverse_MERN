import * as api from '../api';

// Action Creators
export const getStories = () => async (dispatch) => {

    try {
        // api.fetchStories() is a promise that returns an object with a data property that is an array of stories    
        const { data } = await api.fetchStories();
        console.log("Fetching stories...");
        console.log(data);

        // action is an object with a type property and a payload property
        // type: string
        // payload: data (array of stories)
        const action = { type: 'FETCH_ALL_STORIES', payload: data };

        // dispatch is a function that takes an action as an argument   
        dispatch(action);

    } catch (error) {
        console.log(error.message);
    }

}

export const createStory = (story) => async (dispatch) => {

    try {
        console.log(story);
        const { data } = await api.createStory(story);
        console.log("here");
        console.log(data);
        const action = { type: 'CREATE_STORY', payload: data };
        dispatch(action);

    } catch (error) {
        console.log(error.message);
    }

}
