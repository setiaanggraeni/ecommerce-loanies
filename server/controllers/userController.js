'use strict'
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs');
const saltRounds = 5;
var salt = bcrypt.genSaltSync(saltRounds);

class UserController {
    static register(req, res){
        var {name, email, address, city, state, zipcode, status} = req.body
        var hash = bcrypt.hashSync(req.body.password, salt)
        var password = hash
        User.findOne({email:email})
        .then(user => {
            if(!user){
                User.create({
                    name, email, password, address, city, state, zipcode, status
                })
                .then(newUser => {
                    // console.log('regist baru',newUser);
                    res.json(newUser)
                })
            } else {
                res.json('Email already registered!')
            }
        })
    }
    static login(req, res, next){
        var {email, password} = req.body
        User.findOne({email : email})
        .then(user =>{
            // console.log(user);
            if(user !== null){
                let compare = bcrypt.compareSync(password, user.password)
                if(compare){
                    if(user.status === true){
                        console.log('user dr server',user)
                        res.status(200).json(user)
                        // window.location = 'upload.html'
                    } else {
                        res.status(201).json(user)    
                    }
                } else{
                    res.json('Wrong email/password!')
                }
            } else {
                console.log('Email not found, please kindly for register!')
            }
        })
        .catch(err => {
            res.json({
                message : err
            })
        })
    }
}

module.exports = UserController