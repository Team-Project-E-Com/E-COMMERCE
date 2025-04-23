import express from 'express'
import { addtoCart, getUserCart, updatetoCart } from '../controllers/cartController.js'
import authUser from '../middlewares/auth.js'
const cartRouter = express.Router()


cartRouter.post('/get',authUser,getUserCart)
cartRouter.post('/add',authUser,addtoCart)
cartRouter.post('/update',authUser,updatetoCart)


export default cartRouter