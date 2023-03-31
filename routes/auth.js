/**
 * Date: 31/03/2023
 * Subject: Portfolio All package require
 * Auth: Ismile Sardar
 */
//third-parity module require
const express = require('express');
// const authCont = require('../controllers/auth');
const router = express.Router();

//test router
router.get('/',(req,res)=>{
    // console.log('This is testing Route');
    res.status(200).send('This is testing Route');
});

module.exports = router;