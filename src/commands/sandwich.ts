import * as Discord from "discord.js";
import { Command } from "./commandInterface";

export let sandwich: Command = {
    command: '!sandwich',
	description: 'Idiot Sandwich Bot',
	execute(message: Discord.Message, args: string[]): void {
		throw new Error("This is fine");
	}
};