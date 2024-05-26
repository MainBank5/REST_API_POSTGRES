require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1/students', require('./src/student/routes'))


app.listen(PORT, () => {
    console.log(`app running at ${PORT}`)
});