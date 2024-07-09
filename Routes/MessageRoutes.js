const express=require('express')
const router=express.Router()

const createMessage=require('../Controllers/messageControllers')
const getChatMessages=require('../Controllers/messageControllers')

router.post('/:chatid',createMessage)
router.get('/:chatid',getChatMessages)


module.exports=router