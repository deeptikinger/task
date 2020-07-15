const Passangar=require('../db').Passangar
const route=require('express').Router()

route.get('/',(req,res)=>{
    res.send({cost:500*Passangar.quantity})
})

module.exports={
    route
}