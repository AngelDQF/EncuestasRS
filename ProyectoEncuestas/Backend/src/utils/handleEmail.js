require("dotenv").config();//TODO: Importamos dotenv para poder usar las variables de entorno
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host:'gmail',
  port: 587,
  secure: false,
  auth: {
      user: "rs",
      pass: process.env.email_pass
  }
});
let mailOptions = {
  from: 'tucorreo@outlook.com', // Tu dirección de correo electrónico de Outlook
  to: 'destinatario@ejemplo.com', // Dirección de correo electrónico del destinatario
  subject: '¡Hola desde nodemailer!', // Asunto del correo electrónico
  text: 'Este es un correo electrónico enviado desde nodemailer a través de Outlook.', // Cuerpo del correo electrónico en formato de texto sin formato
  html: '<h1>¡Hola desde nodemailer!</h1><p>Este es un correo electrónico enviado desde nodemailer a través de Outlook.</p>' // Cuerpo del correo electrónico en formato HTML
};

// Enviar el correo electrónico
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.log('Error al enviar el correo electrónico:', error);
  } else {
      console.log('Correo electrónico enviado con éxito:', info.response);
  }ssss
});