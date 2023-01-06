import express from "express";
import UserRouter from "./router/user.router";
import "dotenv/config";

// Instance de express
const app = express();
// Utilisation d'une variable d'environnement
const port = process.env.PORT;
// Pemet de lire le JSON
app.use(express.json());
// Instance du router de express ayant pour route par défaut user
app.use("/users", UserRouter);

// Définition du port pour le serveur
app.listen(port, () => {
    console.log(`server lancé sur le port ${port}`);
  });

  