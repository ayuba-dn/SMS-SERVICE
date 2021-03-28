const accountSid = 'ACce61f87d619fce570403ad0530d42af2'; //Replace it with yours
const authToken = 'c15302c74bbc3b1826caa0c4048fc101';   //Replace it with yours
const client = require('twilio')(accountSid, authToken); 

module.exports = {
    async sendSMS(req,res){
        client.messages 
          .create({   
            body: req.body.message,
            messagingServiceSid: 'MG01365709f38c2ee21a4a71cc390cba54',      
            to: req.body.to
          }) 
          .then(message => {
            console.log(message.sid)
            res.status(200).json({message: "sms delivered successfully"});
          
          }) 
          .catch(err=>{
            console.log(err)
            res.status(400).json({message: "something went wrong"+err})
          });
    }
}