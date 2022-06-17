const { Router } = require('express');
const ProfessorController = require('../controllers/ProfessorController');

const router = Router();

router.get('/professores', ProfessorController.getAllProfessores)
router.post('/professores', ProfessorController.registerTeacher)
// router.update('/professores', ProfessorController.registerTeacher)

module.exports = router