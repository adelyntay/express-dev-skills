const devSkills = require('../models/skill');

module.exports = {
    index,
    show
  };
  
  function index(req, res) {
    res.render('skills/index', {
      skills: devSkills.getAll(),
      title: 'All Dev Skills'
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: devSkills.getOne(req.params.id),
      title: 'Dev-Skills Details'
    });
  }