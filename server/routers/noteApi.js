import * as noteDb from '../dbUtils/Notedb.js'
import express from 'express'

const router = express.Router();

router.post('/add', (req, res, next)=>{
	return noteDb.createNote(req.body)
		.then((done)=>{
			res.json(done);
		})
		.catch((err)=>{
			res.status(500).send(err);
		});
});

router.delete('/delete/:id', (req, res, next)=>{
	return noteDb.removeNote(req.params.id)
	.then((data)=>{
		res.status(200).send();
	})
	.catch((err)=>{
		res.status(500).send(err);
	});
});

router.post('/list', (req, res, next)=>{
	return noteDb.listByAuthor(req.body.author)
	then((data)=>{
		res.json(data);
	})
	.catch((err)=>res.status(500).send(err))
});

export default router;