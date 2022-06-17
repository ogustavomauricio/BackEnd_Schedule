const bodyParser = require('body-parser');
// const students = require('../models/students');
const professores = require('./professoresRoute')
const students = require('./studentsRoute')
const cors = require('cors')

module.exports = app => {
   app.use(bodyParser.json(), // o app. use "avisa" o express que existirá uma biblioteca que fará o meio de campo entre as requisições e o proprio express
    cors(),
    professores,
    students,

)}