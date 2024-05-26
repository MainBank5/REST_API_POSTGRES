const express = require('express');
const router = express.Router(); 
const controller = require('./controller')

router.get('/', controller.getAllStudents);
router.post('/', controller.addStudent)
router.get('/:id', controller.getStudentByID);
router.delete('/:id', controller.deleteStudent)


module.exports = router