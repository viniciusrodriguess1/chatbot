const venom = require('venom-bot');

console.log("Iniciando o exemplo simples...");

venom.create()
  .then((client) => {
    console.log("Exemplo simples iniciado!");
    client.onMessage((message) => {
      if (message.body === 'ping') {
        client.sendText(message.from, 'pong')
          .then(() => console.log("Mensagem enviada: pong"))
          .catch(err => console.error("Erro ao enviar mensagem:", err));
      }
    });
  })
  .catch((err) => {
    console.error("Erro ao criar sessão no exemplo simples:", err);
  });
