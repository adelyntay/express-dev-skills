const skills = [
    {id: 125223, skill: 'Web Development', level: '5'},
    {id: 127904, skill: 'Cloud Computing', level: '4'},
    {id: 139608, skill: 'SQL', level: '5'}
  ];

module.exports = {
 getAll,
 getOne
};

function getAll() {
 return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}