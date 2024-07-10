const chatModel = require("../Model/chatModel")
const Chat = require("../Model/chatModel")
const Message = require("../Model/messageModel")
const UserModel = require("../Model/UserModel")
const User = require("../Model/UserModel")

const createChat=async(req,res)=>{
  console.log(req.body)
  const {chat}=req.body
  if(chat.chatType==="one-to-one"){
    const {message}=req.body
    console.log(message)
    newMessage= new Message(message)
   const savedmessage=await newMessage.save()
   chat.messages=[savedmessage._id]
   chat.lastMessage=savedmessage._id
  }
  
  newChat= new Chat(chat)
  newChat.save().then(data=>{
    chat.members.forEach(userid => {
       User.findByIdAndUpdate(userid,{$push:{chats:data._id}},{new:true}).then(data=>{
       
       })
    });
    res.status(201).json(data)
  }).catch(err=>{
    console.log(err)
  })


}

const getUserChats=async(req,res)=>{
  try{
    const {userid}=req.params
    const user=await UserModel.findById(userid)
    const data=await chatModel.find({_id: {$in: user.chats}})
    res.status(200).json(data)
  }
  catch(err){
    console.log(err)
  }

}

const getUserChatswithmoreinfo=async(req,res)=>{
  try{
    const {userid}=req.params
    const user=await UserModel.findById(userid)
    const data=await chatModel.find({_id: {$in: user.chats}}).populate(["members","lastMessage"])
    res.status(200).json(data)
  }
  catch(err){
    console.log(err)
  }

}


const getOnechat=async(req,res)=>{
  const {chatid}=req.query
  const chat= await Chat.findById(chatid)
  res.status(201).json(chat)

}


module.exports={createChat,getUserChats,getOnechat,getUserChatswithmoreinfo}