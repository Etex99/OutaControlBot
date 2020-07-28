"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const hostname = '127.0.0.1';
const port = 35746;
let server = net.createServer();
server.on("connection", function (socket) {
    console.log(socket.remoteAddress + " connected");
    socket.write("I heard you");
    socket.on("close", function () {
        console.log(socket.remoteAddress + " disconnected");
    });
    socket.on("data", function (data) {
        console.log("Received data...");
        console.log(data.toString());
    });
    socket.on("error", function (err) {
        console.log(err);
    });
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
