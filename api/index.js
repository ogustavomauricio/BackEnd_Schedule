require("dotenv").config()
const express = require('express');
const routes = require('./routes')
// const bodyParser = require('body-parser');
// const db = require('./models')

// const Professor = require('./models/professores')
const app = express();
const port = process.env.PORT || 3001

routes(app)

// app.post('/cadastro', async (req, res) => {
//   //   console.log(req.body);
//   //   // res.send('pagina professor')
//   //   try {
//   //   //   const { name, email, password } = req.body;     
//   //     const newUser =  await db.Professor.create(req.body);  
//   //     return res.status(201).json(newUser);
//   //   } catch (e) {
//   //     console.log(e.message);
//   //     res.status(500).json({ message: 'Algo deu errado' });
//   //   }
//   // });

app.listen(port, () => console.log(`SERVIDOR RODANDO NA PORTA ${port}`));

module.exports = app;