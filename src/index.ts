import * as Config from "./secret_config";
import * as Discord from "discord.js";

import { Command } from "./commands/commandInterface";
import { ping } from "./commands/ping";
import { sandwich } from "./commands/sandwich";

// Start-up
const client: Discord.Client = new Discord.Client();

// Command Handler
const commands: Discord.Collection<string, Command> = new Discord.Collection();
commands.set(ping.command, ping);
commands.set(sandwich.command, sandwich);

client.once('ready', () => {
    console.log('Ready!');
});

client.login(Config.secret_config.botToken);

// On Message
client.on('message', message => {
    if (!message.content.startsWith("!") || message.author.bot) return;

    const args: string[] = message.content.trim().split(/ +/);
    const command: string = (<string>args.shift()).toLowerCase();

    if (!commands.has(command)) return;

    try {
        (<Command>commands.get(command)).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Oops. I\'m a sandwich.');
    }
});

