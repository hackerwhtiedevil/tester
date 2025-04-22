const express = require('express');
const { Telegraf } = require('telegraf');

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Example command
bot.command('start', (ctx) => ctx.reply('Hello! This bot is running on Render using webhook.'));

// Attach bot to Express route
app.use(bot.webhookCallback('/webhook'));

// Simple root route
app.get('/', (req, res) => {
  res.send('Bot is live on Render');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
