const getStudentsQuery = "SELECT * FROM students"
const studentByID = "SELECT * FROM students WHERE id = $1"
const checkEmailExists = "SELECT * FROM students WHERE email = $1"
const addNewStudent = "INSERT INTO students (name, email, age, dob) VALUES($1, $2, $3, $4) RETURNING *";
const deleteAStudent = "DELETE FROM students WHERE id = $1 RETURNING *";
const checkQuery = "SELECT * FROM students WHERE id = $1";
const updateStudentDetails = "UPDATE students SET name= $1, email = $2, age = $3, dob = $4 WHERE id =$5 RETURNING *"

module.exports = {
    getStudentsQuery,
    studentByID,
    checkEmailExists,
    addNewStudent,
    checkQuery,
    updateStudentDetails,
    deleteAStudent
};