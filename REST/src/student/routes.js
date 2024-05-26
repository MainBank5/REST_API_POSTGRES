const express = require('express');
const router = express.Router(); 
const controller = require('./controller')

router.get('/', controller.getAllStudents);
router.post('/', controller.addStudent)
router.get('/:id', controller.getStudentByID);
router.put('/:id', controller.updateStudent)
router.delete('/:id', controller.deleteStudent)


module.exports = router;