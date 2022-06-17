//routes/niveisRoute.js

const { Router } = require('express')
const StudentController = require('../controllers/StudentController')

const router = Router()
// router
//  .get('/niveis', StudentController.pegaTodosOsNiveis)
//  .get('/niveis/:id', StudentController.pegaUmNivel)
 router.post('/students', StudentController.registerStudent)
//  .put('/niveis/:id', StudentController.atualizaNivel)
//  .delete('/niveis/:id', StudentController.apagaNivel)
module.exports = router