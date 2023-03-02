var express = require('express');
var router = express.Router();

// Require the controller that exports skills CRUD functions
var skillsCtrl = require('../controllers/skills');


// GET /skills
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);

module.exports = router ;
