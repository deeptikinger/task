const Passanger=require('../db').Passanger
const Summary=require('../db').Summary
const route=require('express').Router()

route.get('/',(req,res)=>{
    Summary.findAll()
    .then((sum)=>{
        res.status(200).send(sum)
    })
    .catch((err)=>{
        res.status(500).send({
        error:err   
        })
    })
})

route.post('/',(req,res)=>{
    
    Summary.create({
       from:req.body.from,
       to:req.body.to,
       date:req.body.date,
       adults:parseInt(req.body.adults),
       TotalCost:500*parseInt(req.body.adults)
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