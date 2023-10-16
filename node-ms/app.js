const express = require("express");
const protobuf = require("protobufjs");
const axios = require("axios");
const app = express();
const port = 3000; // Defina a porta que desejar

app.get("/hello", async (req, res) => {
  const response = await axios.get("http://localhost:8080/courses/1", {
    responseType: "arraybuffer", // Solicite uma resposta em array de bytes
    headers: {
      Accept: "application/x-protobuf", // Indique que você deseja dados protobuf
    },
  });

  // Converta os dados protobuf em um objeto JavaScript
  const protoRoot = await protobuf.load("test.proto"); // Carregue o arquivo .proto
  const User = protoRoot.lookupType("Course"); // Substitua 'User' pelo nome da mensagem protobuf que você está esperando

  // Deserializar os bytes protobuf em um objeto JavaScript
  const userData = User.decode(new Uint8Array(response.data));

  res.send(userData);
});

app.listen(port, () => {
  console.log(`O microserviço está rodando na porta ${port}`);
});
