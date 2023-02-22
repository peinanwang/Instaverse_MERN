import * as api from '../api';
import {
    FETCH_ALL_STORIES,
    CREATE_STORY,
    UPDATE_STORY,
    DELETE_STORY
} from "../constants/actionTypes";

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
        const action = { type: FETCH_ALL_STORIES, payload: data };

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
        const action = { type: CREATE_STORY, payload: data };
        dispatch(action);

    } catch (error) {
        console.log(error.message);
    }

}

export const updateStory = (id, story) => async (dispatch) => {
    try {
        const { data } = await api.updateStory(id, story);

        dispatch({ type: UPDATE_STORY, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const deleteStory = (id) => async (dispatch) => {
    try {
        await api.deleteStory(id);

        dispatch({ type: DELETE_STORY, payload: id });
    } catch (error) {
        console.log(error.message)
    }
};

export const likeStory = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeStory(id);

        dispatch({ type: UPDATE_STORY, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};
