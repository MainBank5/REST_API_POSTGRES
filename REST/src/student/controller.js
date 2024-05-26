const pool = require('../../db');
const queries = require('./queries')

const getAllStudents = async (req, res) => {
    try {
        const {rows} = await pool.query(queries.getStudentsQuery);
        res.status(200).json(rows)
    } catch (error) {
        console.error('Error getting students: ', error);
        res.status(500).json({message:"Internal server error"})
    }
   
}

const getStudentByID = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if(!id) return res.status(400).json({message:"student ID required"});
        const {rows} = await pool.query(queries.studentByID, [id]);
        if(rows.length === 0) {
           return  res.status(404).json({message:"Student not found!"})
        } 
        res.status(200).json(rows)
    } catch (error) {
        console.error('Error getting students', error);
        res.status(500).json({error:"Internal server error"});
    }
}

const addStudent = async (req, res) => {
    try {
        const {name,email, age, dob} = req.body;
    if(!name || !email || !age || !dob) return res.status(400).json({message:"All fields are required"});
    //check if email exists
    const {rows:emailRows} = await pool.query(queries.checkEmailExists, [email]) 
    if(emailRows.length > 0) return res.status(400).json({message:"Email already exists!"});
    //add student to database
    const {rows} = await pool.query(queries.addNewStudent, [name, email, age, dob]); 
    res.status(201).json({message:"Student successfully added!", student:rows[0]});
    

    } catch (error) {
        console.error('Error adding student', error);
        res.status(500).json({error:"Internal server error"});
    }
    
}

const deleteStudent = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            console.error('Invalid student ID:', req.params.id);
            return res.status(400).json({ message: "Valid student ID required" });
        }

        console.log(`Checking if student with ID ${id} exists`);
        const { rows: studentRows } = await pool.query(queries.checkQuery, [id]);
        console.log('Student check result:', studentRows);
        if (studentRows.length === 0) {
            return res.status(404).json({ message: "Student not found!" });
        }

        
        const { rows } = await pool.query(queries.deleteAStudent, [id]);
        console.log('Delete result:', rows);
        if (rows.length === 0) {
            return res.status(404).json({ message: "Failed to delete student" });
        }

        res.status(200).json({ message: "Student successfully deleted!", student: rows[0] });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ error: "Internal server error" });
    }
};


module.exports = {
    getAllStudents,
    getStudentByID, 
    addStudent,
    deleteStudent
};