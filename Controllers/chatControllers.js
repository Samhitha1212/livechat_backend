const chatModel = require("../Model/chatModel")
const Chat = require("../Model/chatModel")
const Message = require("../Model/messageModel")
const UserModel = require("../Model/UserModel")
const User = require("../Model/UserModel")

const createChat=async(req,res)=>{
  const {chat}=req.body
  if(chat.chatType==="one-to-one"){
    const {message}=req.body
    newMessage= new Message({
      message
    })
   const savedmessage=await newMessage.save()
   chat.messages=[savedmessage._id]
  }
  
  newChat= new Chat(chat)
  newChat.save().then(data=>{
    chat.members.forEach(userid => {
      User.findByIdAndUpdate(userid,{$push:{chats:data._id}})
    });
    res.status(201).json(data)
  }).catch(err=>{
    console.log(err)
  })


}

const getUserChats=async(req,res)=>{
  const {userid}=req.params
  const user=UserModel.findById(userid)
  chatModel.find({_id: {$in: user.chats}}).then(data=>{
    res.status(200).json(data)
  }).catch(err=>{
    console.log(err)
  })

}



module.exports=[createChat,getUserChats]