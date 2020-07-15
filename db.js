const Sequelize=require('sequelize')
const db=new Sequelize('api','apiuser','apipass',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5
    }
})
 const Passangar=db.define('passangars',{
     id:{
         type:Sequelize.INTEGER,
         autoIncrement:true,
         primaryKey:true
     },
     name:{
         type:Sequelize.STRING,
         allowNull:false
     },
     email:{
        type:Sequelize.STRING,
        allowNull:false
     },
     quantity:{
         type:Sequelize.INTEGER,
         defaultValue:0,
         allowNull:false
     }
 })
 db.sync()
 .then(()=>{console.log("Database has created")
 }).catch((err)=>{console.log(err)})
 
 exports=module.exports={
    Passangar
 }