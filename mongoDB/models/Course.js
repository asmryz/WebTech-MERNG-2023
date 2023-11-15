const mongoose = require('mongoose');
const {Schema, model} = mongoose

const schemaCourse = Schema({
    courseid: Number, 
    code: String, 
    title: String, 
    crhr: Number, 
    semester: Number    
});

module.exports = model('Course', schemaCourse);