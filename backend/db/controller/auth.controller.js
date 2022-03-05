const dotenv = require('dotenv').config();
const jwt = require('jwt-simple');
const User = require('../model/user.model');

exports.login = async (req, res, next) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        // console.log(`email ${email} - pass ${password}`)
        const user = await User.findOne({ email }).select('+password')    
        if(!user){
            // const error = new Error('Wrong Cradentials')
            // error.statusCode= 401;
            // throw error
            return res.send('there is no account, try create new account')
        }
        const validPassword = await user.validPassword(password)
        if(!validPassword){
            return res.send('wrong password')
            // const error = new Error('Wrong Cradentials')
            // error.statusCode= 401;
            // throw error
        }
        const token = jwt.encode({id:user.id}, process.env.JWT_SECRET)
        return res.send({user, token})

    } catch (err){
        next(err)
    }
}

exports.signup = async (req, res, next) => {
    try{
        // validatorHander(req)
   
        const existingUser = await User.findOne({email : req.body.email}).select('+password')    
        if(!existingUser){
            // const error = new Error('Wrong Cradentials')
            // error.statusCode= 401;
            // throw error
            return res.send('Email already used')
        }
        let user = new User();
        user.email = req.body.email;
        user.password = await user.encryptPassword(req.body.password)
        user.name = req.body.name;
        user = await user.save();
        const token = jwt.encode({id:user.id}, process.env.JWT_SECRET)
        return res.send({user, token})
    } catch (err){
        next(err)
    }
}

exports.me = async (req, res, next) => {
    try{
        // validatorHander(req)
   
        const user = await User.findById(req.user) 
        // redisClient.hset('users', req.user.id, )
        // const token = jwt.encode({id:user.id}, process.env.JWT_SECRET)
        return res.send(user)
    } catch (err){
        next(err)
    }
}