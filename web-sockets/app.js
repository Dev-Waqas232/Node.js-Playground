import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const app = express();

app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5500",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send-message", (data) => {
    socket.broadcast.emit("receive-message", data);
  });
});

server.listen(8000, function () {
  console.log("Server is running on PORT 8000");
});
