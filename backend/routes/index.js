
require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
//const { google } = require('googleapis');
const validator = require('validator');

//const CLIENT_ID = process.env.CLIENT_ID;
//const CLIENT_SECRET = process.env.CLIENT_SECRET;
//const REDIRECT_URI = process.env.REDIRECT_URI;
//const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
//const AUTHORIZATION_CODE = process.env.AUTHORIZATION_CODE;


//const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
//oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


const APP_PASSWORD = process.env.APP_PASSWORD;


async function createTransporter() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'amineelahmad@gmail.com',
      pass: APP_PASSWORD,
    },
  });

  return transporter;
}



function validateContactFormData(name, email, subject, message) {
  if (!name || !email || !subject || !message) {
    return { isValid: false, message: 'All fields are required.' };
  }

  if (!validator.isEmail(email)) {
    return { isValid: false, message: 'Invalid email address.' };
  }
  if (name.length > 100 || subject.length > 100 || message.length > 1000) {
    return { isValid: false, message: 'Name, subject, or message exceeds character limit.' };
  }

  return { isValid: true };
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

router.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  const validationResult = validateContactFormData(name, email, subject, message);

  if (!validationResult.isValid) {
    return res.status(400).json({ status: 'error', message: validationResult.message });
  }

  const transporter = await createTransporter();

  const mailOptions = {
    from: email,
    to: 'amineelahmad@gmail.com',
    subject: `Contact Form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ status: 'success' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ status: 'error', message: 'Error sending email.' });
  }
});

module.exports = router;
