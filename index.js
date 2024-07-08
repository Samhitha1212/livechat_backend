const express=require('express')
const app=express()
const http=require('http')
const cors=require('cors')
const {Server}=require('socket.io')
const UserRoutes=require('./Routes/UserRoutes.js')
const {connect} =require('./db.js')


app.use(cors())
const server=http.createServer(app)
const io=new Server(server,{
  cors:{
    origin:'http://localhost:5173',
    methods: ["GET","POST","PUT","DELETE"],
  }
})

app.use(express.json())
app.use("/api/user",UserRoutes)
connect()


app.get('/',(req,res)=>{
  res.send("this is home page")
})


// io.on('connection',(socket)=>{
//   console.log('user connected',socket.id)

//   socket.on("join_room",(data)=>{
//     socket.join(data)
//     console.log(`User with Id ${socket.id} Joined Room ${data}`)
//   })

//   socket.on("send_message",data=>{
//     console.log(data)
//     socket.to(data.roomId).emit('receive_message',data)
//   })

//   socket.on("disconnect",()=>{
//     console.log("User disconnected",socket.id)
//   })

// })

server.listen(5001,()=>{
  console.log("Server running")
})