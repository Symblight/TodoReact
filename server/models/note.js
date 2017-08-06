import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	color:{type: String},
	createAt:{type: Date, required: true},
	author: {type: String, required:true}

}, {collection:'notes'});

mongoose.model('note', NoteSchema);