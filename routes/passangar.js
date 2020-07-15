const Passangar=require('../db').Passangar
const route=require('express').Router()

route.get('/',(req,res)=>{
    Passangar.findAll()
    .then((psg)=>{
        res.status(200).send(psg)
    })
    .catch((err)=>{
        res.status(500).send({
        error:"ERROR"    
        })
    })
})

route.post('/',(req,res)=>{
    console.log(req.body)
    Passangar.create({
        name:req.body.name,
        email:req.body.email,
        quantity:parseInt(req.body.quantity)
    }).then((psg)=>{
            res.status(200).send(psg)
        }).catch((err)=>{
            res.status(500).send({
                error:"Error"
            })
        })
    })  

module.exports={
        route
}