"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'codingblocks8@gmail.com',
    pass: 'codingblocks@8jan'
  }
});

async function sendMail(from, to, subject, text) {
    try {
        const info = await transporter.sendMail({
            from: from, 
            to: to, 
            subject: subject, 
            text: text, 
        }); 
        console.log("Message sent: %s", info.messageId);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    sendMail
}


