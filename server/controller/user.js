const User = require("../models/user");
const bcrypt = require('bcrypt');

const signup =  async (req , res) => {
    try {
        const {name , email , mobile , address , orders , password } = req.body;
        
        if(!name , !email , !password ){
            res.status(400).json({message : "Please fill all the fields!!!"})
            return;
        }

        let hashpassword = await bcrypt.hash(password , 10)

       const user = new User({
        name,
        email,
        mobile,
        password : hashpassword,
        address,
        orders
       })
       await user.save()
       res.status(200).json({message : "Registered Successfully."})

    } catch (error) {
        return res.status(500).json({ message: error });
    }

}


const login = async (req , res) => {
    try {
        const {email , password} = req.body;
        
        if(!email , !password ){
            res.status(400).json({message : "Please fill all the fields!!!"})
            return;
        }
       
        let isExist = await User.findOne({email});
 
        if(!isExist){
            return res.status(404).json({message : "Invalid credentials!!"})
        }
       
        let hashpassword = await bcrypt.compare(password , isExist.password)
        if(hashpassword){
           return res.status(200).json({message : "Signed in successfully"})
        }
         res.status(404).json({message : "Invalid credentials!!"})
         
    } catch (error) {
        res.status(400).json({message : error})
    }
}


module.exports = {signup , login}