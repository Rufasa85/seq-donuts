const express = require('express');
const router = express.Router();
const Donut = require('../models/Donut');


router.get("/",(req,res)=>{
    Donut.findAll().then(data=>{
        res.json(data);
    })
})

router.post("/",(req,res)=>{
    Donut.create(req.body).then(newDonut=>{
        res.json(newDonut);
    })
})

module.exports = router;