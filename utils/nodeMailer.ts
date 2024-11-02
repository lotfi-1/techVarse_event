import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "Gmail", // You can use other email services
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  
  export default transporter;