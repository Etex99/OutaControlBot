import * as net from "net";

const hostname: string = '127.0.0.1';
const port: number = 35746;

let server: net.Server = net.createServer();

server.on("connection", function (socket: net.Socket): void {

    console.log(socket.remoteAddress + " connected");
    socket.write("I heard you");

    socket.on("close", function (): void {
        console.log(socket.remoteAddress + " disconnected");
    });
    socket.on("data", function (data: Buffer): void {
        console.log("Received data...");
        console.log(data.toString());
    });
    socket.on("error", function (err: Error): void {
        console.log(err);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});