import express from 'express';

const server = express();

const port = 3333;

server.get('/', (request, response ) => {
  response.send('Hello World! - FEMA - Alunos')
  //response.json({msg:"Fim da Aula!!!"});
});

server.post('/', (request, response) => {

} )

server.listen(port, () => {
  console.log(`Server Running - end: http://localhost:${port}`);
})
