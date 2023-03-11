import { Database } from './database';
import express from 'express';
import { randomUUID } from 'node:crypto';

const server = express();

const port = 3333;

server.use(express.json())

const database = new Database();

server.get('/', (request, response ) => {
  const user = database.select("user")
  response.json(user);

  //response.send('Hello World! - FEMA - Alunos')
  //response.json({msg:"Fim da Aula!!!"});
});

// Parâmetro que esta vindo do CLIENTE = REQUEST
// Parâmetrp que esta indo para o CLIENTE = RESPONSE

server.post('/', (request, response) => {
  const { name, email } = request.body;

  const user = {
    id: randomUUID(),
    name,
    email
  };

  database.insert('user', user)

  response.status(201).json({msg:'Eu sei o que você fez no verão passado'});

})

server.listen(port, () => {
  console.log(`Server Running - end: http://localhost:${port}`);
})
