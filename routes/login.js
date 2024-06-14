import { Router } from "express";
import jwt from "jsonwebtoken";
import { agentes } from "../data/agentes.js";

const router = Router();
const secreto = process.env.SECRET;
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const isAgent = agentes.some(
    (agentes) => agentes.email === email && agentes.password === password
  );

  if (isAgent) {
    const token = jwt.sign({ email: email }, secreto, { expiresIn: "2m" });
    res.json({
      html: `<h1>Bienvenido</h1> <h2>${email}</h2><a href="/casos"> ver casos </a>`,
      token: token,
    });
  } else {
    res.status(401).send("usuario no autorizado");
  }
});

export { router };
