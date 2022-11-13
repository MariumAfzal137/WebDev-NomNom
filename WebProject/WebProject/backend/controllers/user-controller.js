import User from "../model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {signAccessToken,signAdminAccessToken} from "../middleware/check-auth";


export const getAllUser = async (req, res, next) => {
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

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
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

  const hashedPassword = bcrypt.hashSync(password);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    blogs: [],
  });
  try {
    user.save();

  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ message: "Successful signup" });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "Couldnt Find User By This Email" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  let accessToken
  if(existingUser.role==="admin"){
    accessToken = await signAdminAccessToken(existingUser.id)
  }
  else{
    accessToken = await signAccessToken(existingUser.id)
  }
  

  return res
    .status(200)
    .json({ message: "Login Successfull", accessToken: accessToken });
};

export const getProfile= async (req, res, next) => {

  let user;
  try {
    user = await User.findById(req.payload.aud);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ user });

};
export const getUserById= async (req, res, next) => {

  let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json({user});
    });

};


export const updateUser= async (req, res, next) => {

  User.findById(req.params.id, function(err, user) {
    if (!user)
        res.status(404).send("data is not found");
    else
        user.name = req.body.name;
        user.password = req.body.password;
        user.email = req.body.email;
        
        user.save().then(user => {
            res.json('User upated!');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
});

};

//employeeRoute.route('/deleteEmployee/:id').get(function (req, res) 

export const deleteUser = async (req, res, next) => {

  let id = req.params.id
  let existingUser;
  try {
    existingUser = await User.findOne({ id });
    res
          .status(400)
          .json({ message: 'User found' });
    
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) 
    try{
      User.deleteOne({ _id: req.params.id }, function (err, user){
        return res
          .status(400)
          .json({ message: 'User Deleted Successfully' });
      
        });
    }
    catch(err){
      return res
          .json({ message: 'User not deleted' });
      
    }
  

  };