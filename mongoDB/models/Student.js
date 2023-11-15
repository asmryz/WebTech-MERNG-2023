const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const studentSchema = new Schema({
	regno: String,
	name: String
})

module.exports = model('Student', studentSchema);
