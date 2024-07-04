const Team = require('../models/team');

// CRUD Controllers

exports.getTeams = (req, res, next) => {
    Team.findAll()
        .then(Teams => {
            res.status(200).json({ Teams: Teams });
        })
        .catch(err => console.log(err));
}


exports.getTeam = (req, res, next) => {
    const teamId = req.params.teamId;
    Team.findByPk(teamId)
        .then(team => {
            if (!team) {
                return res.status(404).json({ message: 'team not found!' });
            }
            res.status(200).json({ team: team });
        })
        .catch(err => console.log(err));
}


exports.createTeam = (req, res, next) => {
  const name = req.body.name;
  const sport = req.body.sport;
  const institution_id = req.body.institution_id;
  Team.create({
    name: name,
    sport: sport,
    institution_id: institution_id
  })
    .then(result => {
      console.log('Created Team');
      res.status(201).json({
        message: 'Team created successfully!',
        Team: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}

exports.updateTeam = (req, res, next) => {
  const teamId = req.params.teamId;
  const updateName = req.body.name;
  const updateSport = req.body.sport;
  const updateInstitution_id = req.body.institution_id;
  Team.findByPk(teamId)
    .then(team => {
      if (!team) {
        return res.status(404).json({ message: 'team not found!' });
      }
      team.name = updateName;
      team.sport = updateSport;
      team.institution_id = updateInstitution_id;
      return team.save();
    })
    .then(result => {
      res.status(200).json({message: 'team updated!', team: result});
    })
    .catch(err => console.log(err));
}

exports.deleteTeam = (req, res, next) => {
  const teamId = req.params.teamId;
  Team.findByPk(teamId)
    .then(team => {
      if (!team) {
        return res.status(404).json({ message: 'team not found!' });
      }
      return team.destroy({
        where: {
          id: teamId
        }
      });
    })
    .then(result => {
      res.status(200).json({ message: 'team deleted!' });
    })
    .catch(err => console.log(err));
}