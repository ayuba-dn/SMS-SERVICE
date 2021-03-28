const express = require("express")
const SMS_Routes = require('./routes/smsRoutes.js');

const app = express()

app.use(express.json())
app.use('/send',SMS_Routes)

app.listen(3030, ()=>{
    console.log("SMS Service Running on Port 3030")
})