import express from 'express'
import { problemsetController, taskController, createProblemController } from '../controllers/problemsetController.js'
import {isAdmin, requireSignIn} from '../middlewares/authMiddleware.js'
const router = express.Router()

router.get('/', problemsetController)
router.get('/task/:id', taskController)
router.post('/create-problem', requireSignIn, isAdmin, createProblemController)

export default router