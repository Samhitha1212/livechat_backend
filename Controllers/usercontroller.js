const User=require('../Model/UserModel')

const createUser=async(req,res)=>{
  const {email,username,fid}=req.body
  if(!(email && username && fid)){
    res.status(400).json({error:"Feilds are required"})
  }else{
    const newUser=new User({
      email,
      username,
      fid,
    })
    newUser.save().then((data)=>{
      res.status(201).json(data)
    }).catch((err)=>{
      console.log(err.message,"unable to add User")
    })
  }
 
}

const getUserByID=async(req,res)=>{
  //single user by id 
  const id=req.params.id
  try{
    const data= await User.findById(id)
    res.status(200).json(data)
  }
  catch(err){
    console.log(err.message)
    res.status(404).json({error:"cannot fetch data"})
  }
}


const getUsers=async(req,res)=>{
  
  if( req.query.fid){
    qfid=req.query.fid
    try{
      const data= await User.findOne( {fid: qfid },) 
      res.status(200).json(data)
    }
    catch(err){
      console.log(err.message)
      res.status(404).json({error:"cannot fetch data"})
    }
  

  }else if(req.query.grpid){
    const {grpid}=req.query
    User.find({chats: {$in: grpid}}).then(data=>{
      res.status(200).json(data)
    }).catch(err=>{
      console.log(err)
    })

  }
  
  else{
   //all user
    try{
      const data= await User.find()
      res.status(200).json(data)
    }
    catch(err){
      console.log(err.message)
      res.status(404).json({error:"cannot fetch data"})
    }
  }


}

const UpdateUser=async(req,res)=>{
  const id=req.params.id
  const newdata=req.body
  try{
    const data= await User.findByIdAndUpdate(id,{$set: newdata},{new:true})
    if(data){
      res.status(200).json(data)
    } else{
      res.json({error:"Unable to update the data"})
    }

  }
  catch(err){
    console.log(err.message)
    res.status(404).json({error:"cannot fetch data"})
  }
  
}
module.exports={createUser,getUserByID,getUsers,UpdateUser}