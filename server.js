const express=require('express')
const path=require('path')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/cost',require('./routes/summary').route)
app.use('/api',require('./routes/passanger').route)
app.listen(2000,()=>console.log("server started"))