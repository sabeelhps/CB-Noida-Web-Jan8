const express = require('express');
const { sendMail } = require('./mailor');
const app = express();

app.use(express.json());

app.post('/send', async (req, res) => {
    console.log(req.body);
    const { from, to, subject, text } = req.body; 
    await sendMail(from, to, subject, text);
    res.send('Mail Sent Successfully');
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});