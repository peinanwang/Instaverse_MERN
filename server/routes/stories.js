import { Router } from 'express';
import { getStories, createStory} from "../controllers/stories.js";

const router = Router();

// router.get("/", (req, res) => {
//     res.send("Hello from stories");
// });

// to make the app more scalable, we can use controllers to handle the logic
router.get("/", getStories);
router.post("/", createStory);


export default router;