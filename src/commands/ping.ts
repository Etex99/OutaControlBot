import * as Discord from "discord.js";
import { Command } from "./commandInterface";

export let ping: Command = {
    command: '!ping',
	description: 'Ping!',
	execute(message: Discord.Message, args: string[]): void {
		message.channel.send('Pong!');
	}
};