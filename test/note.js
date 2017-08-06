'use strict';
process.env.NODE_ENV = 'test';

import chai from 'chai'
import chaihttp from 'chai-http'
import server from '../index.app.js'
import mongoose from 'mongoose'
import '../server/models/note.js'

let Note = mongoose.model('note');
let should = chai.should();

chai.use(chaihttp);

describe('note', ()=>{
	beforeEach((done)=>{
		Note.remove({}, (err)=>{
			done();
		});
	});

	/*
	* Test for /POST create note
	*/

	describe('/POST note create', ()=>{
		it('it should POST', (done)=>{
    		setTimeout(done, 15000);
			let note = {
				title: "Test note!",
				description: "This is test for note api",
				color: "yellow",
				author: "admin"
			}
			this.timeout(5000);
			chai.request(server)
			.post('/add')
			.send(note)
			.end((err, res)=>{
				res.should.have.status(200);

				//res.body.should.be.a('object');
				/*res.body.note.should.have.property('title');
				res.body.note.should.have.property('description');
				res.body.note.should.have.property('color');
				res.body.note.should.have.property('author');
				res.body.note.should.have.property('createAt');*/
				done();
			});
		});
	});

	describe('/POST note add' , ()=>{
		it('it should POST test', (done)=>{
			let _note = {
				title: "Test note POST!",
				description: "This is test for note api",
				color: "yellow",
				author: "admin"
			}
			chai.request(server)
			.post('/add')
			.send(_note)
			.end((err, res)=>{
				res.should.have.status(200);
				res.body.should.be.a('object');
				//res.body.book.should.have.property('title');
				done();
			});
		});
	})

	/*
	* Test for /DELETE remove note
	*/

	describe('/DELETE note remove', ()=>{
		it('it should DELETE', (done)=>{
			let note = new Note({
				title: "Test note DELETE!",
				description: "This is test for note api",
				color: "red",
				author: "qwerif",
				createAt: new Date()
			})
			note.save((err, data)=>{
				chai.request(server)
					.delete('/delete/'+ data._id)
					.end((err, res)=>{
						res.should.have.status(200);
					done();
				});
			});
			
		});
	});

	/*
	* Test for /POST list notes
	*/

	describe('/GET note list', ()=>{
		it('it should GET', (done)=>{
			let note = new Note({
				title: "Note",
				description: "This is test for note api",
				color: "orange",
				author: "qwerif",
				createAt: new Date()
			});
			note.save((err, data)=>{
				chai.request(server)
				.post('/list')
				.send(data)
				.end((err, res)=>{
					res.should.have.status(200);
					done();
				});
			});
			
		});
	});
});