import express from "express"
import { generateImage } from "../controller/imageController.js"
import { userAuth } from "../middlewares/auth.js"

export const imageRouter=express.Router()

imageRouter.post('/generate-image',userAuth,generateImage)