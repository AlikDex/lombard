import { serverConfig } from "@/utils/config/serverConfig";

export const sendTelegramBot = () => {
  const config = serverConfig.telegram;
  console.log(config);
  const send = (msg: string) => {
    return fetch(`https://api.telegram.org/bot${config.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${config.TELEGRAM_CHAT_ID}&parse_mode=html&text=${msg}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return { send };
};
