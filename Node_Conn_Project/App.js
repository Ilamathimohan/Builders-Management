const express= require("express");
const mysql=require("mysql");
const doenv=require("dotenv");
const path=require("path");
const hbs=require("hbs");
const app=express();

doenv.config({
    path:"./.env",
});
const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASS,
    database:process.env.DATABASE,
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("MySQL Connection Success");
    }
});

app.use(express.urlencoded({extended:false}));

//console.log(__dirname);
const location=path.join(__dirname,"./public");
app.use(express.static(location));
app.set("view engine","hbs");

app.use("/",require("./Routes/Pages"));
app.use("/Auth",require("./Routes/Auth"));

app.get('/Home',(req,res)=>{
    res.render("Home");
})
app.listen(4000,()=>{
    console.log("Server Started @ Port 4000");
});  
