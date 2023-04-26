const mysql= require("mysql");
const bcrypt= require("bcryptjs");

const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASS,
    database:process.env.DATABASE,
});

exports.login = async(req,res)=>{
    try{
        const{email, password} = req.body;
        if(!email || !password){
            return res.status(400).render("Login",{
                msg: "Please enter your Email and Password",
                msg_type: "error"});
        }
        db.query("select * from Users where User_Email=?",
        [email],async(error,result)=>{
            console.log(result);
            if(result.length<=0){
                return res.status(401).render("Login",{
                    msg: "Email or Password Incorrect",
                    msg_type: "error"});
            }
            else{
                // console.log("Password is : "+result[0].User_Password);
                if(password!=result[0].User_Password){
                    return res.status(402).render("Login",{
                        msg: "Email or Password Incorrect",
                        msg_type: "error"});
                }
                else{
                    res.render("Home");
                }                    
            }
        });
    }catch(error){
        console.log(error);  
    }
};
exports.register = (req,res)=>{
    console.log();
    /*
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const Password = req.body.Password;
    console.log(Name);
    console.log(Email);
    //res.send("Form Submitted");
    */

    const{ Name, Email, Password} = req.body;
    console.log(req.body);
    db.query("select User_Email from Users where User_Email=?",
    [Email],
    async(error,result)=>{
        if(error){
            confirm.log(error);
        }
        else if(result.length>0)
        {
            return res.render("Register",{msg:"Email Id already taken",
            msg_type:"error"});
        }
        // let hashedPassword =await bcrypt.hash(Password,8); 
        //console.log(hashedPassword);

        db.query("insert into Users set ?",
        {User_Name:Name, User_Email:Email, User_Password:Password},
        (error,result)=>{
            if(error){
                console.log(error);
            }
            else {
                console.log(result);
                return res.render("Register",{msg:"User Registration Success",
                msg_type:"good"});
            }
        });

    });
};