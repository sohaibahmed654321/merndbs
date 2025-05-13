let user = require("../Collections/user")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")
require("dotenv").config()


let all_func = {

    Home : async function (req,res) {
       res.send("Home Page");
       res.end();
   },


   register_user : async function (req,res) {
    try {
        let {name,email,password,age} = req.body;
        let checkEmail = await user.findOne({email: email})
        if (checkEmail) {
            return res.status(409).json({msg: "Email Already Exist"});
        } else {
            let encrypt_pass = bcrypt.hashSync(password, 16);
            let user_data = new user ({name,email,password : encrypt_pass, age});
            let create_user = await user_data.save();
            res.status(200).json({msg: "User Created Successfully", data: create_user});
        }        
    } catch (error) {
        res.status(501).json({msg: error.message});
    }
   },
   get_user:async function(req,res){
    try{
        let getdata=await user.find().select("-password").sort({"created_at":-1})
        return res.status(201).json(getdata)
    }
    catch(error){
        res.status(501).json({msg : error.message})
    }
   },

 delete_record:async function(req,res){

try{
    let{id} =req.params
let id_dhundo = await user.findById(id)
if(id_dhundo){
    await user.findByIdAndDelete(id_dhundo)
    return res.status(200).json({msg:"Record Deleted Sucessfully"})
}

}
 
catch(error){
    res.status(501).json({msg:error.message})
}
 },

 update_record:async function(req,res){

    try {
        let{id} = req.params
        let {name,email,age} = req.body;

        let id_dhundo = await user.findById(id);
        if(id_dhundo){
            await user.findByIdAndUpdate(id,{name : name, email : email, age : age})
            res.status(200).json({msg:"Record Update Sucessfully"})
        }
        
    } catch (error) {
        res.status(501).json({msg : error.message})
        
    }
 },
 login_work:async function(req,res){
   try {
    let{email,password} =req.body;

    let find_user_email=await user.findOne({email})
    if (!find_user_email) {
        return res.status(404).json({msg : "Email Not Found"})
        
    }
    let getPassword = bcrypt.compareSync(password,find_user_email.password)
    if (!getPassword){
        return res.status(404).json({msg : "Password is Incorrect"})
        
    }
    let user_record = jwt.sign({id : find_user_email._id},process.env.JWT_KEY,{expiresIn:"2d"})
    return res.status(201).json({
        msg : "Login Sucess",
        user_record:{
            n : find_user_email.name,
            e: find_user_email.email
        }
    })
   } catch (error) {
    return res.status(501).json({msg : error.message})
    
   }
 }

}


 
module.exports = all_func;
