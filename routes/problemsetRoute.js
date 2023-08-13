import express from 'express'
import { problemsetController, taskController, submitController, createProblemController } from '../controllers/problemsetController.js'
import {isAdmin, requireSignIn} from '../middlewares/authMiddleware.js'
const router = express.Router()

router.get('/', problemsetController)
router.get('/task/:id', taskController)
router.post('/submit/:id', requireSignIn, submitController)
router.post('/create-problem', requireSignIn, isAdmin, createProblemController)

export default router