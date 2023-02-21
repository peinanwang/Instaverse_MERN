import { Router } from 'express';
import { getStories, createStory, updateStory } from "../controllers/storyController.js";

const router = Router();

// to make the app more scalable, we can use controllers to handle the logic
router.get("/", getStories);
router.post("/", createStory);
router.patch("/:id", updateStory);

export default router;