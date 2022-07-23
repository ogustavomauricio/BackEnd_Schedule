//routes/niveisRoute.js

const { Router } = require('express')
const StudentController = require('../controllers/StudentController')

const router = Router()
// router
//  .get('/niveis', StudentController.pegaTodosOsNiveis)
//  .get('/niveis/:id', StudentController.pegaUmNivel)
 router.post('/students', StudentController.registerStudent)
 router.get('/students', StudentController.getStudent)
//  router.put('/students/:id', StudentController.updateStudent)
 router.delete('/students/:id', StudentController.deleteStudent)
 router.put('/students/:id', StudentController.updateStudent)

module.exports = router