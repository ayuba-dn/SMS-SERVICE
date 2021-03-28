const router = require("express").Router();
const SMS_Service = require('../services/smsService');

router.post('/', (req,res) =>{
    SMS_Service.sendSMS(req,res);
});


module.exports = router