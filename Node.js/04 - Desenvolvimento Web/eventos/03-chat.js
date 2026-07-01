// Atividade prática — Simulação de chat com eventos (userJoined e message).
const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
  entrar(usuario) {
    this.emit("userJoined", usuario);
  }
  enviarMensagem(usuario, texto) {
    this.emit("message", usuario, texto);
  }
}

const sala = new ChatRoom();

sala.on("userJoined", (usuario) => console.log(`${usuario} entrou na sala.`));
sala.on("message", (usuario, texto) => console.log(`${usuario}: ${texto}`));

sala.entrar("Cauê");
sala.enviarMensagem("Cauê", "Olá, pessoal!");
