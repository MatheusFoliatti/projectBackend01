import express from 'express';

const app = express();

const port = 3000;

app.get('/', (request, response ) => {
  // response.send('Hello World! - FEMA - Alunos')
  response.json({msg:"Fim da Aula!!!"});
});

app.listen(port, () => {
  console.log('Server running!! 👌👌👌👌👌');
})
