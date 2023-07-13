import User from "../model/User.js";


export const GetAllUsers = async (req, res, next) => {
    let users;
    try {
      users = await User.find();
    } catch (err) {
      console.log(err);
    }
    if (!users) {
      return res.status(404).json({ message: "No Users Found" });
    }
  return res.status(200).json({ users });
};

export const Signup = async (req, res, next) => {
  const { name, email, password} = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User Already Exists! Login Instead" });
  }

  const createdUser = new User({
    name,
    email,
    password,
  });
  try {
    await createdUser.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({message:"Signin Successfull" ,user: createdUser });
}

export const Login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser= await User.findOne({ email });
  }catch(e){
    console.log(e);
  }
  if(!existingUser){
    return res.status(404).json({message:"User not found"});
  }
  if(existingUser.password !== password){
    return res.status(401).json({message:"Invalid Credentials"});
  }
  return res.status(200).json({message: "Login Successfull",user:existingUser});
}

export const UpdatePassword= async (req,res,next) =>{
  const {email,password}= req.body;
  let existingUser;
  try{
    existingUser= await User.findOne({email});
  }catch(e){
    console.log(e);
  }
  if(!existingUser){
    return res.status(404).json({message:"User not found"});
  }
  existingUser.password=password;
  try{
    await existingUser.save();
  }catch(e){
    console.log(e);
  }
  return res.status(200).json({message:"Password Updated Successfully"});
}