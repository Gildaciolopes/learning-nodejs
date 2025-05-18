const express = require("express");
const app = express();
app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello World!</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Felipe",
      email: "felipe@felipe.com",
    },
    {
      name: "João",
      email: "joao@joao.com",
    },
  ];

  res.status(200).json(users);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Rodando com express na porta ${port}`);
});
