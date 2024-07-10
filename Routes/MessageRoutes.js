const express=require('express')
const router=express.Router()


const messageControllers = require('../Controllers/messageControllers')
const{createMessage, getChatMessages}=messageControllers

router.post('/:chatid',createMessage)
router.get('/:chatid',getChatMessages)


module.exports=router