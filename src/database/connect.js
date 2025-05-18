const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.angtfkl.mongodb.net/test?retryWrites=true&w=majority&appName=CursoNodeJSDicasparadevs`
    );
    console.log("Conexão ao banco de dados realizada com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error.message);
  }
};

module.exports = connectToDatabase;
