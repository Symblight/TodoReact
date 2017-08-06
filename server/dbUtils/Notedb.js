import mongoose from 'mongoose'
import '../models/note.js'

const Note = mongoose.model('note');

export const createNote = (data) =>{
	const note = new Note({
		title: data.title,
		description: data.description,
		color: data.color,
		createAt: new Date(),
		author: data.author
	});
	return note.save();
}

export const removeNote = (noteId) =>{
	console.log(noteId);
	return Note.findOneAndRemove({'_id': noteId});
}

export const listByAuthor = (authorId) =>{
	return Note.findOne({'author':authorId});
}