const database = require('../models');

class StudentController {
    static async registerStudent(req, res) {
        console.log('DADOS RECEBIDOS', res.body);
		try {
			const newStudent = await database.Students.create(req.body)
			return res.status(200).json(newStudent)
		} catch (error) {
			res.status(500).json(error.message)
		}
	}

}

module.exports = StudentController;