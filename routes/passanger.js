const Passanger=require('../db').Passanger
const route=require('express').Router()

route.get('/',(req,res)=>{
    Passanger.findAll()
    .then((psg)=>{
        res.status(200).send(psg)
    })
    .catch((err)=>{
        res.status(500).send({
        error:err   
        })
    })
})

route.post('/',(req,res)=>{
    Passanger.create({
        name:req.body.name,
        email:req.body.email,
        phone:parseInt(req.body.phone)
    }).then((psg)=>{
       
            res.status(200).send(psg)
        }).catch((err)=>{
            res.status(500).send({
                error:err
            })
        })
    })  

module.exports={
        route
}