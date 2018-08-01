'use strict'
const express = require('express'),
      router = express.Router(),
      images = require('../helpers/image')
const Product = require('../models/product')
const {getAllProducts} = require('../controllers/productsController')

/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome Buddy!' })
})
router.get('/getAllProducts', getAllProducts)

router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
})

router.post('/uploadmlab', (req, res) => {
  console.log('masuukkk post');
  Product.create({
    price: req.body.price,
    brand: req.body.brand,
    description: req.body.description,
    category: req.body.category,
    imgurl: req.body.imgurl
  })
  .then(result => {
    console.log("hasil post-----",result);
    
    res.json(result)
  })
  .catch(err => {
    console.log(err)
  })
})





module.exports = router