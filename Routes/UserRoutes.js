const express=require('express')
const router=express.Router()
const User=require('../Model/UserModel')

router.post('/',(req,res)=>{
  const newUser=new User({
    email:req.body.email,
    username:req.body.username,
    fid:req.body.fid
   
  })
  newUser.save().then((data)=>{
    res.json(data)
  }).catch((err)=>{
    console.log(err,"unable to add User")
  })

})

router.get('/', async (req,res)=>{
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


})

router.get('/:id', async (req,res)=>{
  const id=req.params.id
  try{
    const data= await User.findById(id)
    res.status(200).json(data)
  }
  catch(err){
    console.log(err.message)
    res.status(404).json({error:"cannot fetch data"})
  }
  
  })



router.put('/:id', async (req,res)=>{
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
  
  })

  // router.get('/:id', async (req,res)=>{
  //   const id=req.params.id
  //   try{
  //     const data= await User.findById(id)
  //     res.status(200).json(data)
  //   }
  //   catch(err){
  //     console.log(err.message)
  //     res.status(404).json({error:"cannot fetch data"})
  //   }
    
  //   })

 

module.exports=router