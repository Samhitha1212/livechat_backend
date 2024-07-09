const express=require('express')
const router=express.Router()

const User=require('../Model/UserModel')

const createUser=require('../Controllers/usercontroller')
const getUserByID=require('../Controllers/usercontroller')
const getUsers=require('../Controllers/usercontroller')
const UpdateUser=require('../Controllers/usercontroller')

router.post('/',createUser)
router.get('/', getUsers)
router.get('/:id', getUserByID)
router.put('/:id', UpdateUser)

 

module.exports=router