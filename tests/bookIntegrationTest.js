var should = require('should'),
    request = require('supertest')
    app = require('../app.js')
    mongoose = require('mongoose')
    Book = mongoose.model('Book')
    agent = request.agent(app)

describe('Book CRUD Test', ()=>{
    it('Should allow a book to be posted and return a read and _id', ()=>{
        var bookPost = {title:'New Book',author:'Jon Doe',genre:'Sci-Fi'}
        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end((err,results)=>{
                results.body.read.should.equal(false)
                result.body.should.have.property('_id')
                done()
            })
            
    })

    afterEach((done)=>{
        Book.remove().exec()
        done()
    })
})