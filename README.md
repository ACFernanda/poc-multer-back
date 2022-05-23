# Buffer e Upload de arquivos com Multer

    npm install multer

1. Por que o `UPLOAD` é diferente de uma requisição normal com o `JSON`?

   Temos alguns tipos para o corpo da requisição. O mais utilizado é o JSON, mas para envio de arquivos precisamos utilizar o `multipart/form-data`.

   O Multer `não processará` nenhum formulário que não seja multipart.

   Para fazer o "parse", a transformação dos dados enviados pelo front, utilizamos a biblioteca `Multer`, que funciona como um middleware.

2. Amazon Simple Storage Service (Amazon S3)

   - Mais escalável;
   - Salvar no seu próprio backend: terá que garantir backup;
   - Na configuração do multer, ao inves de salvar no disco, salvaríamos para um buffer, em memória, e faríamos upload do buffer para o provedor. Para acessar o arquivo, ao invés de acessar pelo servidor, acessaríamos pela URL que esse provedor nos daria.
   - Buffer: armazena dados temporariamente - mantem as informações salvas antes de serem usadas.
