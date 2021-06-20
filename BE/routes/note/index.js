const noteController = require('@controllers/note');
const express = require('express');

const router = express.Router();

router.post('/create', noteController.createNote);
router.get('/getnote', noteController.getNote);
router.get('/getnoteby/:idx', noteController.getNoteById);
router.patch('/update', noteController.noteUpdate);
module.exports = router;
