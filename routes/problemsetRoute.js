import express from 'express'
import { problemsetController, taskController, submitController, createProblemController } from '../controllers/problemsetController.js'

const router = express.Router()

router.get('/', problemsetController)
router.get('/task/:id', taskController)
router.post('/submit/:id', submitController)
router.post('/create-problem', createProblemController)

export default router