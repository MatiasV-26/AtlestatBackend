const Matchrelatedwithteams = require('../models/matchrelatedwithteams');

// CRUD Controllers

exports.getMatchrelatedwithteamsc = (req, res, next) => {
    Matchrelatedwithteams.findAll()
        .then(Matchrelatedwithteamsc => {
            res.status(200).json({ Matchrelatedwithteamsc: Matchrelatedwithteamsc });
        })
        .catch(err => console.log(err));
}


exports.getMatchrelatedwithteams = (req, res, next) => {
    const matchrelatedwithteamsId = req.params.matchrelatedwithteamsId;
    Matchrelatedwithteams.findByPk(matchrelatedwithteamsId)
        .then(matchrelatedwithteams => {
            if (!matchrelatedwithteams) {
                return res.status(404).json({ message: 'Matchrelatedwithteams not found!' });
            }
            res.status(200).json({ matchrelatedwithteams: matchrelatedwithteams });
        })
        .catch(err => console.log(err));
}


exports.createMatchrelatedwithteams = (req, res, next) => {
  const match_id = req.body.match_id;
  const team1_id = req.body.team1_id;
  const team2_id = req.body.team2_id;
  Matchrelatedwithteams.create({
    match_id: match_id,
    team1_id: team1_id,
    team2_id: team2_id
  })
    .then(result => {
      console.log('Created Matchrelatedwithteams');
      res.status(201).json({
        message: 'Matchrelatedwithteams created successfully!',
        Matchrelatedwithteams: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}

exports.updateMatchrelatedwithteams = (req, res, next) => {
    const matchrelatedwithteamsId = req.params.matchrelatedwithteamsId;
    const updateTeam1 = req.body.team1_id;
    const updateTeam2 = req.body.team2_id;
    Matchrelatedwithteams.findByPk(matchrelatedwithteamsId)
      .then(matchrelatedwithteams => {
        if (!matchrelatedwithteams) {
          return res.status(404).json({ message: 'matchrelatedwithteams not found!' });
        }
        matchrelatedwithteams.team1_id = updateTeam1;
        matchrelatedwithteams.team2_id = updateTeam2;
        return matchrelatedwithteams.save();
      })
      .then(result => {
        res.status(200).json({message: 'matchrelatedwithteams updated!', matchrelatedwithteams: result});
      })
      .catch(err => console.log(err));
  }