const express=require('express')
const router=express.Router()
const chatControllers=require('../Controllers/chatControllers')

const {createChat, getUserChats,getOnechat,getUserChatswithmoreinfo}=chatControllers

router.post('/',createChat)
router.get('/:userid',getUserChats)
router.get('/full/:userid',getUserChatswithmoreinfo)

router.get('/',getOnechat)



module.exports=router