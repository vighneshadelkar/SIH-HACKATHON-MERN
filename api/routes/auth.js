const express=require('express');
const Authrouter = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');
const secretKey = process.env.jwtsecretkey;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

Authrouter.post('/register', async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        // checks if user enters all the data
        if (!(lastname && firstname && email && password)) {
            res.status(400).json(
                {
                    message: "all fields compulsory"
                });
        }

        // checks if user already exits
        const existingUser = await User.findOne({ email });

        // if user exists then dont sign in
        if (existingUser) {
            res.status(400).json({
                message: "user exists"
            })
        }

        // encrypts the password
        const encryptedPass = await bcrypt.hash(password, 10);

        const user = new User({
            firstname,
            lastname,
            email,
            password: encryptedPass,
            token: token
        })

        // creates jwt token
        const token = jwt.sign({
            id: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname
        }, secretKey, {
            expiresIn: "1h"
        });

        // creates the user
        const savedUser = await user.save();

        // sets token and password this is not changed in the db
        user.token = token;
        user.password = undefined;

        res.status(200).json(savedUser);

    } catch (error) {
        res.status(401).json({message:error});
    }
})

Authrouter.post('/login', async (req, res) => {
    try {

        const { email, password } = req.body;

        // checking if user sends all the data
        if (!(email && password)) {
            res.status(400).json({
                message: "enter all data"
            })
            return
        }

        // finds if the user is present in db
        let user = await User.findOne({ email });

        // match the password
        const checkPass = await bcrypt.compare(password, user.password);

        if (user && checkPass) {
            const token = jwt.sign({
                user: user._id,
                email: user.email
            }, secretKey, {
                expiresIn: "1h"
            })

            user.token = token;
            user.password = undefined;

            // cookies

            const option = {
                expires: new Date(Date.now() + 1000 * 60 * 60),
                httpOnly: true
            }

            // send token in user cookie
            res.status(200).json(user);

            res.status(200).cookie("token", token, option).json({
                success: true
            })
            // res.status(200).json({
            //     success: true
            // })
        }
    } catch (error) {
        res.status(401).json({message:"error"});
    }
})

module.exports=Authrouter;