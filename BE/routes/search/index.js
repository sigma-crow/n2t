const searchContoller = require('@controllers/search');

const express = require('express');

const router = express.Router();

router.get('/', searchContoller.searchPublicNote);
router.get('/note', searchContoller.getNote);

module.exports = router;
