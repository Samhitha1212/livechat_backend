const express=require('express')
const router=express.Router()

const createChat=require('../Controllers/chatControllers')
const getUserChats=require('../Controllers/chatControllers')

router.post('/',createChat)
router.get('/:userid',getUserChats)



module.exports=router