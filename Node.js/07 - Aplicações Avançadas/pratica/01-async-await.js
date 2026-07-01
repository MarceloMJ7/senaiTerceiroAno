// Exercício — usa async/await para buscar dados de uma API (fetch nativo do Node 18+).
async function buscarUsuarios() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resposta.json();
    console.log("Total de usuarios:", usuarios.length);
    console.log("Primeiro usuario:", usuarios[0].name);
  } catch (erro) {
    console.error("Falha ao buscar dados:", erro.message);
  }
}

buscarUsuarios();
