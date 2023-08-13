import express from "express"
import { registerController, loginController } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post('/register', registerController)
router.post('/login', loginController)
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ok: true})
})
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ok: true})
})

export default router;