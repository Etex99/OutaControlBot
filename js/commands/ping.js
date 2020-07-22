"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
exports.ping = {
    command: '!ping',
    description: 'Ping!',
    execute(message, args) {
        message.channel.send('Pong!');
    }
};
