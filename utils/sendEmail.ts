/** @format */

import transporter from "./nodeMailer";
import fs from "fs";
import path from "path";

export default async function sendEmail(
  name: string,
  to: string,
  event: string
) {
  if (!to) throw new Error("Invalid email or OTP");
  let htmlContent = fs.readFileSync(
    path.join(process.cwd(), `./utils/emailTemplate.html`),
    "utf8"
  );

  htmlContent = htmlContent.replace("{{name}}", name);
  htmlContent = htmlContent.replace("{{event}}", event);
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: `${event} Register`, // Subject line
    html: htmlContent, // Set the HTML content
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("email sent successfully");
  } catch (error) {
    throw new Error("Error sending email");
  }
}
