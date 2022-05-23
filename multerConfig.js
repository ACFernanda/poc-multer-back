import multer from "multer";
import path from "path"; // NODE

// CONFIGURAÇÃO DO MULTER PARA FAZER O PARSE

// const storage = multer.memoryStorage()
// Ao usar o armazenamento de memória, as informações do arquivo conterão um campo chamado buffer que contém o arquivo inteiro.
// Buffer: armazena dados temporariamente - mantem as informações salvas antes de serem usadas.

export const storage = multer.diskStorage({
  // RECEBER O ARQUIVO E SALVAR NO DISCO
  destination: (req, file, callback) => {
    // PROPRIEDADE DESTINATION, RECEBE UMA FUNÇÃO
    callback(null, path.resolve("./uploads")); // O CALLBACK QUE DETERMINA AONDE QUE SERÁ SALVO O ARQUIVO RECEBIDO
    // DEVEMOS CRIAR A PASTA UPLOAD MANUALMENTE PARA EVITAR ERROS DE PERMISSÃO NA CRIAÇÃO DA PASTA
  },
  filename: (req, file, callback) => {
    // COMO EU QUERO FORMATAR O NOME DO ARQUIVO - evitará nomes repetidos
    const time = Date.now();
    callback(null, `${time}_${file.originalname}`);
    // De onde vem o "originalname"? https://github.com/expressjs/multer/blob/master/doc/README-pt-br.md
  },
});
