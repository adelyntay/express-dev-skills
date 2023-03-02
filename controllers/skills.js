const devSkills = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkills,
    create,
    delete: deleteSkills
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

  function newSkills(req, res) {
    res.render('skills/new', {title: 'New Dev Skill'});
  }

  function create(req, res) {
    res.redirect('/skills');
  }

  function deleteSkills(req, res) {
    devSkills.deleteOne(req.params.id);
    res.redirect('/skills');
  }