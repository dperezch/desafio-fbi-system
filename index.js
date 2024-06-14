import express from "express";
import { router as login } from "./routes/login.js";
import { router as casos } from "./routes/casos.js";

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use("/SignIn", login);
app.use("/casos", casos);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
