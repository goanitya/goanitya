const express = require('express');
var nodemailer = require('nodemailer');
const app = express();

app.use(express.json());



app.post('/login',(req,res) => {
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'irfanrazzaq29@gmail.com',
      pass: '03364600900'
    }
  });
  //goanitya@gmail.com
  var mailOptions = {
    from: req.body.email,
    to: 'link2mehar@gmail.com',
    subject: req.body.subject,
    text: req.body.message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      res.json("Message sent successfully");
    }
  });
})




app.listen(3000,()=> console.log('server is up at 3000'));