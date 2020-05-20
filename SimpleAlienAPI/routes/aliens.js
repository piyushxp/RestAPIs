const express = require("express")

const router = express.Router()
const Alien = require("../models/alien")
router.get('/',async(req,res)=>{
   try{
       const aliens = await Alien.find()
       res.json(aliens)


   }catch(err){

   }
})


router.post('/',async(req,res)=>{
    const alien = new Alien({
        name:req.body.name,
        tech: req.body.tech,
        sub:req.body.sub
    })
    try{
        const a1 = await alien.save()
        res.json(a1)
    
    }catch(err){
        res.send("error")
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const aliens = await Alien.findById(req.params.id)
        res.json(aliens)
 
 
    }catch(err){
        res.send("Error")
    }
 })
 

module.exports = router