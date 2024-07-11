const express=require('express')
const http=require('http')
const {Server}=require('socket.io')

const app=express()


const server=http.createServer(app)
const io=new Server(server,{
  cors:{
    origin:'http://localhost:5173',
    methods: ["GET","POST","PUT","DELETE"],
  }
})
 const getReceiversSocketId=(receiversId)=>{
  const socketIds=[]
  receiversId.forEach((receiverId)=>{
    socketIds.push(userSocketMap[receiverId])
  })
  return socketIds;
}
const userSocketMap={}; //{userid,socketid}


io.on('connection',(socket)=>{
  console.log('user connected',socket.id)

const userId=socket.handshake.query.userId

if(userId != "undefined"){
  userSocketMap[userId]=socket.id
}

//io.emit is used to send events to all connected clients
io.emit("getOnlineUsers",Object.keys(userSocketMap))



//   socket.on("join_room",(data)=>{
//     socket.join(data)
//     console.log(`User with Id ${socket.id} Joined Room ${data}`)
//   })

//   socket.on("send_message",data=>{
//     console.log(data)
//     socket.to(data.roomId).emit('receive_message',data)
//   })


// socket.on( ) used to listen events in both server and client side
  socket.on("disconnect",()=>{
    console.log("User disconnected",socket.id)
    delete userSocketMap[userId]
    io.emit("getOnlineUsers",Object.keys(userSocketMap))
  })

})


module.exports={app,server,io,getReceiversSocketId}