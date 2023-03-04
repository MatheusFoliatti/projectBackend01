import express from 'express';

const server = express();

const port = 3333;

server.use(express.json())

const dados: string[] = []

server.get('/', (request, response ) => {
  response.json(dados)

  //response.send('Hello World! - FEMA - Alunos')
  //response.json({msg:"Fim da Aula!!!"});
});

// Parâmetro que esta vindo do CLIENTE = REQUEST
// Parâmetrp que esta indo para o CLIENTE = RESPONSE

server.post('/', (request, response) => {
  const { name } = request.body;

  dados.push(name);

  response.status(201).send();

})

server.listen(port, () => {
  console.log(`Server Running - end: http://localhost:${port}`);
})
