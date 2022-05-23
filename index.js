import express from "express";
import multer from "multer";
import cors from "cors";

import { storage } from "./multerConfig.js";

const app = express();
app.use(cors());

const upload = multer({ storage: storage }); // CONFIGURAÇÃO DO MULTER

app.use("/files", express.static("./uploads")); // COMO VISUALIZAR NO FRONT? "http://localhost:3000/files/${nome_do_arquivo}"

// MULTER COMO MIDDLEWARE
app.post("/upload", upload.single("file"), (req, res) => {
  // endpoint recebe um arquivo só - "single"
  return res.send(req.file.filename);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
