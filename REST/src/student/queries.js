const getStudentsQuery = "SELECT * FROM students"
const studentByID = "SELECT * FROM students WHERE ID = $1"

module.exports = {
    getStudentsQuery,
    studentByID
};