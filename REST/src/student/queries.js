const getStudentsQuery = "SELECT * FROM students"
const studentByID = "SELECT * FROM students WHERE id = $1"
const checkEmailExists = "SELECT * FROM students WHERE email = $1"
const addNewStudent = "INSERT INTO students (name, email, age, dob) VALUES($1, $2, $3, $4) RETURNING *";
const deleteAStudent = "DELETE FROM students WHERE id = $1 RETURNING *";
const checkQuery = "SELECT * FROM students WHERE id = $1";

module.exports = {
    getStudentsQuery,
    studentByID,
    checkEmailExists,
    addNewStudent,
    checkQuery,
    deleteAStudent
};