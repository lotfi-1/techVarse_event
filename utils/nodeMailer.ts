/** @format */

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail", // You can use other email services
  port: 587, // Use 465 for secure connection (SSL)
  secure: false, // Set to true if using port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default transporter;
