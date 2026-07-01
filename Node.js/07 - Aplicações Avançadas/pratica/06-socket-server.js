// Exercício — servidor Socket.io para chat em tempo real.
// Requer: npm install express socket.io
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const servidor = http.createServer(app);
const io = new Server(servidor);

app.get("/", (req, res) => res.sendFile(__dirname + "/cliente.html"));

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  socket.on("message", (msg) => {
    console.log("Mensagem recebida:", msg);
    io.emit("message", msg); // reenvia para todos os clientes (tempo real)
  });

  socket.on("disconnect", () => console.log("Cliente desconectou:", socket.id));
});

servidor.listen(3000, () => console.log("Socket.io em http://localhost:3000"));
