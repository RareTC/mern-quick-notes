const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const notesCtrl = require('../../controllers/api/notes');


router.get('/', ensureLoggedIn, notesCtrl.index);
//POST to create note
router.post('/', ensureLoggedIn, notesCtrl.create);


module.exports = router;