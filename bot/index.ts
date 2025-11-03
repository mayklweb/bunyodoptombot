import { Telegraf } from "telegraf";
import dotenv from "dotenv";
import fetch from "node-fetch";
import crypto from "crypto";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// ✅ Validate Telegram Init Data (security)
function validateInitData(initData) {
  const secret = crypto.createHmac("sha256", "WebAppData").update(process.env.BOT_TOKEN!).digest();
  const arr = initData.split('&').sort();
  const hash = arr.find((x) => x.startsWith("hash="))?.replace("hash=", "");
  const dataCheckString = arr.filter((x) => !x.startsWith("hash=")).join("\n");

  const newHash = crypto.createHmac("sha256", secret).update(dataCheckString).digest("hex");
  return newHash === hash;
}

bot.start((ctx: any) =>
  ctx.reply("Welcome to InterMagazin 🛍️\nPastdagi tugma orqali kirishingiz mumkin", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🛒 Do‘konga kirish",
            web_app: { url: process.env.WEBAPP_URL! },
          },
        ],
      ],
    },
  })
);

// ✅ WebApp Data Listener
bot.on("web_app_data", async (ctx) => {
  try {
    const dataStr = ctx.message?.web_app_data?.data;
    if (!dataStr) return;

    const payload = JSON.parse(dataStr);

    // ❗ validate telegram data
    if (!validateInitData(payload.initData)) {
      return ctx.reply("❌ Xavfsizlik tekshiruvi o‘tmadi");
    }

    await ctx.reply(`✅ Buyurtma qabul qilindi!\n🧾 Order ID: ${payload.orderId}`);

    // ✅ send to backend
    const res = await fetch(`${process.env.API_URL}/orders/confirm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    console.log("Backend response:", result);

  } catch (err) {
    console.error("WEB_APP_DATA error:", err);
    ctx.reply("❗ Xatolik yuz berdi");
  }
});

console.log("✅ Bot started...");
bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
