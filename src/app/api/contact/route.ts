import { NextRequest } from "next/server";
import TelegramBot from "node-telegram-bot-api";

const BOT_CONTACT_TOKEN = "7067238702:AAEk4Eg3-FkEKJbHR3BZec6BkUUqPDNxeEE";
const CONTACT_CHANNEL_ID = "-1002360193208";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    if (!email || !name || !message) {
      return Response.json(
        {
          statusCode: 400,
          message: "Bad Request!",
          data: null,
        },
        {
          status: 400,
        }
      );
    }
    const bot = new TelegramBot(BOT_CONTACT_TOKEN);
    const markdownMessage = `Một người có tên là ${name} và email là ${email} đã gửi một lời nhắn: ${message}`;
    await bot.sendMessage(CONTACT_CHANNEL_ID, markdownMessage, {
      parse_mode: "HTML",
    });

    return Response.json(
      {
        statusCode: 200,
        message: "OK!",
        data: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("🚀 ~ POST ~ error:", error);
    return Response.json(
      {
        statusCode: 500,
        message: "Something went wrong!",
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
