'use strict'
const express = require('express')
const Product = require('../models/product')
const Transaction = require('../models/Transaction')

class AllProducts {
    static getAllProducts(req, res){
        Product.find({})
        .then((response) => {
        res
            .status(200)
            .send(response);
        })
        .catch((err) => {
        res
            .status(400)
            .send(err);
        });
    }
    static checkout(req, res){
        var {name, email, address, city, state, zipcode, totalItem, totalBuy} = req.body
        Transaction.create({
            name, email, address, city, state, zipcode, totalItem, totalBuy
        })
        .then(newTransaction => {
            res.json(newTransaction)
        })
        .catch(err => {
            res.json('Please input your valid data!')
            console.log(err)
        })

    }
}

module.exports = AllProducts