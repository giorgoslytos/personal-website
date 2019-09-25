const mailGunApiPassword = require('./password');
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: mailGunApiPassword,
    domain: 'sandbox465ea1f4a7024c53b81afb1abcfe0dc7.mailgun.org'
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, message, cb) => {
  const mailOptions = {
    from: email,
    to: 'giorgoslytos@gmail.com',
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return cb(err, null);
    } else {
      return cb(null, data);
    }
  })
}

module.exports = sendMail;
