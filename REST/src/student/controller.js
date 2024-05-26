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

module.exports = {
    getAllStudents,
    getStudentByID
};