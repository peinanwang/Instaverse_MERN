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

const createStory = async (req, res) => {
    const body = req.body;

    const newStory = new Story({
        ...body,
    });

    try {
        await newStory.save();
        res.status(201).json(newStory); // 201 - created
    } catch (error) {
        res.status(409).json({ message: error.message }); // 409 - conflict
    }
};

const updateStory = async (req, res) => {
    
    const { id: _id } = req.params.id;
    const story = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No story with that id");
    }

    const updatedStory = await Story.findByIdAndUpdate(_id, story, { new: true});
    res.json(updatedStory);
};

export { getStories, createStory, updateStory };