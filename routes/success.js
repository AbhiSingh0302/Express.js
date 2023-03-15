const express = require('express');

const formalitesController = require('../controllers/formalities')

const path = require('path');

const router = express.Router();

router.post('/success',formalitesController.postSuucess);

module.exports = router;