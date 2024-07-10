const express=require('express')
const router=express.Router()

const User=require('../Model/UserModel')


const userControllers=require('../Controllers/usercontroller')
const{ createUser,getUserByID,getUsers,UpdateUser}=userControllers

router.post('/',createUser)
router.get('/', getUsers)
router.get('/:id', getUserByID)
router.put('/:id', UpdateUser)

 

module.exports=router