import express from "express";
import { getTutors, createTutor} from '../controllers/tutorController.js';

const router = express.Router();

router.post("/", createTutor);
router.get("/", getTutors);

export default router;