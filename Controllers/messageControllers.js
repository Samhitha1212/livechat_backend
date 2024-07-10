const chatModel = require("../Model/chatModel")
const Chat = require("../Model/chatModel")
const messageModel = require("../Model/messageModel")


const createMessage=async(req,res)=>{
const message=req.body
const {chatid}=req.params
const newMessage= new messageModel(message)
const savedmessage=await newMessage.save()
const updatedChat=await chatModel.findByIdAndUpdate(chatid,{
  $push:{messages:savedmessage._id},
  lastMessage:savedmessage._id
},{new:true})
res.status(201).json(savedmessage)
}



const getChatMessages=async(req,res)=>{

  const {chatid}=req.params
  const chat= await Chat.findById(chatid)
  messageModel.find({_id: {$in: chat.messages}}).then(data=>{
    res.status(200).json(data)
  }).catch(err=>{
    console.log(err)
  })

}


module.exports={createMessage,getChatMessages}