import { serverConfig } from "@/utils/config/serverConfig";
import nodemailer from "nodemailer";

export const sendEmail = () => {
  const config = serverConfig.email;
  const send = async (message: string) => {
    const transporter = nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: config.SMTP_SECURE, // Use true for port 465, false for port 587
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASS,
      },
    });

    // Send an email using async/await
    const info = await transporter.sendMail({
      from: config.SMTP_USER,
      to: config.SMTP_USER,
      subject: "Заявка на обратный звонок",
      text: message, // Plain-text version of the message
      html: "<b>Hello world?</b>", // HTML version of the message
    });

    console.log("Message sent:", info);
  };
  return { send };
};
