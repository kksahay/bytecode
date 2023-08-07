import express from 'express'
import { problemController, problemListController } from '../controllers/problemController.js'

const router = express.Router()

router.get('/problem-list', problemListController)
router.get('/problem-list/:id', problemController)

export default router