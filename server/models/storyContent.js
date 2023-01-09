import mongoose from "mongoose";

// create a schema for the MongoDB database
const storySchema = mongoose.Schema({
    caption: { type: String, required: true },
    username: { type: String, required: true },
    userId: { type: String, required: true },
    image : { type: String, required: true },
    tags: String,
    likes: { type: Number, default: 0 },
    postDate: { type: Date, default: new Date() },
});

// create a model for the schema
export default mongoose.model("Story", storySchema);
