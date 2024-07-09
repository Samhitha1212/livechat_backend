const User=require('../Model/UserModel')

const createUser=async(req,res)=>{
  const newUser=new User({
    email:req.body.email,
    username:req.body.username,
    fid:req.body.fid
  })
 const savedUser=await newUser.save().then((data)=>{
    res.status(201).json(data)
  }).catch((err)=>{
    console.log(err,"unable to add User")
  })
}

const getUserByID=async(req,res)=>{
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
  if(! req.query.fid){
    try{
      const data= await User.find()
      res.status(200).json(data)
    }
    catch(err){
      console.log(err.message)
      res.status(404).json({error:"cannot fetch data"})
    }

  }else{
    qfid=req.query.fid
    try{
      const data= await User.findOne( {fid: qfid },) 
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
      res.status(200).json({success:true,data:Updateddata})
    } else{
      res.json({error:"Unable to update the data"})
    }

  }
  catch(err){
    console.log(err.message)
    res.status(404).json({error:"cannot fetch data"})
  }
  
}
module.exports=[createUser,getUserByID,getUsers,UpdateUser]