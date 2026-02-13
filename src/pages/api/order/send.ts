import { sendEmail } from "@/components/messaging/email";
import { sendTelegramBot } from "@/components/messaging/telegram";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: { message: string } = req.body;
  const email = sendEmail();
  const telegram = sendTelegramBot();
  try {
    const result = telegram.send(data.message);
    const mailResult = email.send(data.message);
    return res.status(200).json({ message: "ok" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
}
