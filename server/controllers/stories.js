import mongoose from "mongoose";
import Story from "../models/storyContent.js";

const getStories = async (req, res) => {
    const story = await Story.find();

    try {
        res.status(200).json(story);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
};

const createStory = (req, res) => {
    const story = req.body;

    const newStory = new Story({
        ...body
    });

    try {
        newStory.save();
        res.status(201).json(newStory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export { getStories, createStory };