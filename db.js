const Sequelize=require('sequelize')
const db=new Sequelize('api','apiuser','apipass',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5
    }
})
 const Passanger=db.define('passanger',{
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
     phone:{
        type:Sequelize.BIGINT,
        allowNull:false
     }
 })
const Summary=db.define('summary',{
    from:{
       type:Sequelize.STRING,
       allowNull:false
    },
    to:{
      type:Sequelize.STRING,
      allowNull:false
    },
    Date:{
      type:Sequelize.DATE,
      allowNull:false,
      defaultValue: Sequelize.NOW,
     
    },
     adults:{
         type:Sequelize.INTEGER,
         allowNull:false
     },
     TotalCost:{
         type:Sequelize.DOUBLE,
         defaultValue:0,
     }
})

 db.sync()
 .then(()=>{console.log("Database has created")
 }).catch((err)=>{console.log(err)})
 
 exports=module.exports={
    Passanger,Summary
 }