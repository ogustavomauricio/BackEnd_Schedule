//routes/niveisRoute.js

const { Router } = require('express')
const StudentController = require('../controllers/StudentController')

const router = Router()
// router
//  .get('/niveis', StudentController.pegaTodosOsNiveis)
//  .get('/niveis/:id', StudentController.pegaUmNivel)
 router.post('/students', StudentController.registerStudent)
 router.get('/students', StudentController.getStudent)
//  .put('/niveis/:id', StudentController.atualizaNivel)
 router.delete('/students/:id', StudentController.deleteStudent)
module.exports = router