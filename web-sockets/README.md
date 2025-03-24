# Web Sockets Basics 🚀

This folder contains fundamental concepts and examples for **WebSockets** using **Socket.IO** with Node.js. It serves as a reference for understanding WebSockets at a basic level.

## 📌 Why WebSockets?

WebSockets enable **real-time, bidirectional communication** between clients and servers, making them ideal for:

- Chat applications 💬
- Live notifications 🔔
- Collaborative editing tools ✍️
- Multiplayer games 🎮
- Live stock price updates 📈

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```sh
npm install socket.io express
```

### 2️⃣ Setting Up WebSockets in Node.js

```javascript
import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("User Connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected: ", socket.id);
  });
});

server.listen(8000, () => {
  console.log("WebSocket server running on PORT 8000");
});
```

### 3️⃣ Client-side Connection (HTML & JavaScript)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
  </head>
  <body>
    <script>
      const socket = io("http://localhost:8000");
      socket.on("connect", () => {
        console.log("Connected to server");
      });
    </script>
  </body>
</html>
```

## 📖 Topics Covered

✅ WebSockets Basics & Setup  
✅ Real-time Data Streaming  
✅ Broadcasting Messages  
✅ Handling User Disconnections  
✅ Basic WebSocket Events
