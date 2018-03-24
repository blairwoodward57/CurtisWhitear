                     require('dotenv').config();
const express      = require('express');
const bodyParser   = require('body-parser');
const nodemailer   = require('nodemailer');
const xoauth2      = require('xoauth2');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/form', (req, res) => {
    console.log(req.body)
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Subject: ${req.body.subject}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({

            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                    user: process.env.USER_EMAIL,
                    pass: process.env.USER_PASSWORD,
                xoauth2: xoauth2.createXOAuth2Generator({
                    user: process.env.USER_EMAIL,
                    clientId: process.env.CLIENT_ID,
                    clientSecret: process.env.CLIENT_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN
                })
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: process.env.USER_EMAIL,
            subject: req.body.subject,
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
                res.send(500)
            } else {
                console.log('Email Sent')
                res.send(200)
            }
        })
    })
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})