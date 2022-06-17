const database = require('../models');

class ProfessorController {
	static async getAllProfessores(req, res) {
		try{
			const todosProfessores = await database.Professores.findAll();
			return res.status(200).json(todosProfessores)
		}
		catch(error) {
			res.status(500).json(error.message)
		}
	}

	static async registerTeacher(req, res) {
		try {
			const newTeacher = await database.Professores.create(req.body)
			return res.status(200).json(newTeacher)
		} catch (error) {
			res.status(500).json(error.message)
		}
	}

	static async updateTeacher(req, res) {
		const { id } = req.params
		const novasInfos = req.body
		try {
			await database.Professores.update(novasInfos, { where: { id: Number(id) }})
			return res.status(200).json({ message: 'Atualizado com sucesso'})
		} catch (error) {
			res.status(500).json(error.message)
		}
	}
}

module.exports = ProfessorController