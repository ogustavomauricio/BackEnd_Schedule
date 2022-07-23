const { NUMBER } = require('sequelize');
const database = require('../models');

class StudentController {
	static async registerStudent(req, res) {
		// console.log('DADOS RECEBIDOSssss', req.body);
		try {
			const newStudent = await database.Students.create(req.body)
			return res.status(200).json(newStudent)
		} catch (error) {
			res.status(500).json(error.message)
		}
	}

	static async getStudent(req, res) {
		try {
			const newStudent = await database.Students.findAll()
			// console.log(newStudent);
			return res.status(200).json(newStudent)
		} catch (error) {
			res.status(500).json(error.message)
		}
	}

	static  async updateStudent(req, res) {
		console.log('CHAMOU FUNÇÃO');
		const atualizaEstudante = req.body; 
		const { id } = req.params
		console.log('PARAMETROS', typeof id );
		try {
			await database.Students.update(atualizaEstudante, {
				where: {
					id: Number(id),
				}
			})

			const pessoaAtualizada = await database.Students.findOne({ where : {
				id: Number(id)
			}})
			return res.status(200).json(pessoaAtualizada)
		} catch (error) {
			res.status(500).json(error.message)
		}
	}

	static async deleteStudent(req, res) {
		const { id } = req.params
		// console.log('TABLE_ID:', req.params);
		try {
		 await database.Students.destroy({ where: {table_id: Number(id)}})
			// console.log(newStudent);
			return res.status(200).json({message: 'Excluido com sucesso'})
		} catch (error) {
			res.status(500).json(error.message)
		}
	}
}

module.exports = StudentController;