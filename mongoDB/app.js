const express = require('express')
const app = express();
const PORT = process.env.PORT || 4000;

const db = require('./models');


app.get('/courses', (req, res)=>{
    db.Course.find()
    .then(courses => res.status(200).json(courses)) 
});



app.listen(PORT ,()=> console.log(`Server is listening on http://localhost:${PORT}`))
