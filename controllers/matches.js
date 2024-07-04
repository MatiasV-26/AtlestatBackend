const Match = require('../models/match');

// CRUD Controllers

exports.getMatches = (req, res, next) => {
    Match.findAll()
        .then(Matches => {
            res.status(200).json({ Matches: Matches });
        })
        .catch(err => console.log(err));
}


exports.getMatch = (req, res, next) => {
    const matchId = req.params.matchId;
    Match.findByPk(matchId)
        .then(match => {
            if (!match) {
                return res.status(404).json({ message: 'Match not found!' });
            }
            res.status(200).json({ match: match });
        })
        .catch(err => console.log(err));
}


exports.createMatch = (req, res, next) => {
  const score = req.body.score;
  const date = req.body.date;
  const location = req.body.location;
  Match.create({
    score: score,
    date: date,
    location: location

  })
    .then(result => {
      console.log('Created Match');
      res.status(201).json({
        message: 'Match created successfully!',
        Match: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}


exports.updateMatch = (req, res, next) => {
  const matchId = req.params.matchId;
  const updateScore = req.body.score;
  const updateDate = req.body.date;
  const updateLocation = req.body.location;
  Match.findByPk(matchId)
    .then(match => {
      if (!match) {
        return res.status(404).json({ message: 'match not found!' });
      }
      match.score = updateScore;
      match.date = updateDate;
      match.location = updateLocation;
      return match.save();
    })
    .then(result => {
      res.status(200).json({message: 'match updated!', match: result});
    })
    .catch(err => console.log(err));
}