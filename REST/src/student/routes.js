const express = require('express');
const router = express.Router(); 
const controller = require('./controller')

router.get('/', controller.getAllStudents);
router.get('/:id', controller.getStudentByID);

module.exports = router