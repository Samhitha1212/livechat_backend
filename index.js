const {app,server,io}=require('./socket/socket.js')
const express=require('express')
const cors=require('cors')
const dotenv=require("dotenv")
const UserRoutes=require('./Routes/UserRoutes.js')
const MessageRoutes=require('./Routes/MessageRoutes.js')
const ChatRoutes=require('./Routes/chatRoutes.js')
const {connect} =require('./db.js')



dotenv.config()
const PORT=process.env.PORT || 5001


app.use(cors())
app.use(express.json())
app.use("/api/user",UserRoutes)
app.use("/api/chat",ChatRoutes)
app.use("/api/message",MessageRoutes)

connect()


app.get('/',(req,res)=>{
  res.send("this is home page")
})

server.listen(5001,()=>{
  console.log("Server running ",PORT)
})