import { Server } from "socket.io";

export default function socketSetup(server) {
    const io = new Server(server, {
        cors: { origin: "*" },
    });

    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        socket.on("send-message", (msg) => {
            io.emit("receive-message", msg);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected", socket.id);
        });
    });
}