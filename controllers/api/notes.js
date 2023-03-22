const Note = require('../../models/note');

module.exports = {
    create,
    index,
}

async function create(req, res) {
    try {
        console.log('up here?')
        req.body.user = req.user._id
        const note = await Note.create(req.body)
        await note.save();
        res.json(note)
        console.log(res.json(note), 'hello')
    } catch (err) { 
        res.status(400).json(err);
    }
}
async function index(req, res) {
    try {
        const notes = await Note.find({user: req.user._id})
        res.json(notes)
    } catch (err) {
        res.status(400).json(err);
    }
}
