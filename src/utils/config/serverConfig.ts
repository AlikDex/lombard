// lib/config/server-config.ts
import "server-only"; // ← гарантирует, что файл нельзя импортировать в клиент

const requiredEnv = (key: string): string => {
  const value = process.env[key];
  if (value == null) {
    throw new Error(`Требуемая переменная окружения ${key} не задана.`);
  }
  return value;
};

export interface IEmailConfig {
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_SECURE: boolean;
  SMTP_USER: string;
  SMTP_PASS: string;
}

export interface ITelegramConfig {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
}

export const serverConfig: { telegram: ITelegramConfig; email: IEmailConfig } = {
  telegram: {
    TELEGRAM_BOT_TOKEN: requiredEnv("TELEGRAM_BOT_TOKEN"),
    TELEGRAM_CHAT_ID: requiredEnv("TELEGRAM_CHAT_ID"),
  },
  email: {
    SMTP_HOST: requiredEnv("SMTP_HOST"),
    SMTP_PORT: parseInt(requiredEnv("SMTP_PORT"), 10),
    SMTP_SECURE: requiredEnv("SMTP_SECURE") === "true",
    SMTP_USER: requiredEnv("SMTP_USER"),
    SMTP_PASS: requiredEnv("SMTP_PASS"),
  },
};
