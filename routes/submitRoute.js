import express from "express";
import { submitController } from "../controllers/submitController.js";

const router = express.Router()

router.post('/:id', submitController)

export default router;