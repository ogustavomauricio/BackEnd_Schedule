require("dotenv").config()
const express = require('express');
const routes = require('./routes')
// const bodyParser = require('body-parser');
// const db = require('./models')

// const Professor = require('./models/professores')
const app = express();
const port = process.env.PORT || 3001

routes(app)

app.listen(port, () => console.log(`SERVIDOR RODANDO NA PORTA ${port}`));

module.exports = app;