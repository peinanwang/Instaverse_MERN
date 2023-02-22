import { Router } from 'express';
import { getStories, createStory, updateStory, deleteStory, likeStory } from "../controllers/storyController.js";

const router = Router();

// to make the app more scalable, we can use controllers to handle the logic
router.get("/", getStories);
router.post("/", createStory);
router.patch("/:id", updateStory);
router.delete("/:id", deleteStory);
router.patch("/:id/likeStory", likeStory);


export default router;