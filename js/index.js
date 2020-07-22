"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config = require("./secret_config");
const Discord = require("discord.js");
const ping_1 = require("./commands/ping");
const sandwich_1 = require("./commands/sandwich");
// Start-up
const client = new Discord.Client();
// Command Handler
const commands = new Discord.Collection();
commands.set(ping_1.ping.command, ping_1.ping);
commands.set(sandwich_1.sandwich.command, sandwich_1.sandwich);
client.once('ready', () => {
    console.log('Ready!');
});
client.login(Config.secret_config.botToken);
// On Message
client.on('message', message => {
    if (!message.content.startsWith("!") || message.author.bot)
        return;
    const args = message.content.trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!commands.has(command))
        return;
    try {
        commands.get(command).execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply('Oops. I\'m a sandwich.');
    }
});
