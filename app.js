require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const path = require('path');



const token = process.env.TOKEN;
const port = process.env.PORT || 3000;

const bot = new TelegramBot(token, {polling: true});
const app = express();



bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];
    
    bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        console.log(msg);
        if(msg.from.is_bot === false) {
                bot.sendMessage(chatId, `Hola ${msg.chat.username} en que puedo ayudarte`);
        }
        
        //bot.sendMessage(chatId, 'received message');
});


app.listen(port, (listen) => {
        console.log(`Server listening at port ${port}`);
        
});