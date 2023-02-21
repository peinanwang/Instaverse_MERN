import mongoose from "mongoose";

// create a schema for the MongoDB database
const storySchema = mongoose.Schema({
    caption: { type: String, required: true },
    username: { type: String, required: true },
    userId: { type: String },
    image : { type: String, required: true },
    tags: String,
    likes: { type: Number, default: 0 },
    postDate: { type: Date, default: new Date() },
});

// create a model for the schema
// first argument is the name of the model
// second argument is the schema
export default mongoose.model("Story", storySchema);
