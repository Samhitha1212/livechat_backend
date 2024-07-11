const chatModel = require("../Model/chatModel")
const Chat = require("../Model/chatModel")
const messageModel = require("../Model/messageModel")
const { getReceiversSocketId ,io} = require("../socket/socket")



const createMessage=async(req,res)=>{
const message=req.body
const {chatid}=req.params
const newMessage= new messageModel(message)
const savedmessage=await newMessage.save()
const updatedChat=await chatModel.findByIdAndUpdate(chatid,{
  $push:{messages:savedmessage._id},
  lastMessage:savedmessage._id
},{new:true}).then(updatedChat=>{
  const receiversSocketId=getReceiversSocketId(updatedChat.members
  //   updatedChat.members.filter(member=>{
  //   return (member != message.author)
  // })
)
  if(receiversSocketId.length >0){
    receiversSocketId.forEach((Id)=>{
      io.to(Id).emit("newMessage",{
        "newmessage":savedmessage,
        "newmessagechat":updatedChat})
    })
  }
  res.status(201).json(savedmessage)

})

}



const getChatMessages=async(req,res)=>{

  const {chatid}=req.params
  const chat= await Chat.findById(chatid).then(chat=>{
    messageModel.find({_id: {$in: chat.messages}}).then(data=>{
      res.status(200).json(data)
  })
  }).catch(err=>{
    console.log(err)
  })

}


module.exports={createMessage,getChatMessages}