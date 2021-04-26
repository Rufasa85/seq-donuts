const express = require('express');
const router = express.Router();
const Bread = require('../models/Bread');


router.get("/",(req,res)=>{
    Bread.findAll().then(data=>{
        res.json(data);
    })
})

router.post("/",(req,res)=>{
    Bread.create(req.body).then(newDonut=>{
        res.json(newDonut);
    })
})

module.exports = router;