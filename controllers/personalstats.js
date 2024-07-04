const Personalstat = require('../models/personalstat');

// CRUD Controllers

exports.getPersonalstats = (req, res, next) => {
    Personalstat.findAll()
        .then(Personalstats => {
            res.status(200).json({ Personalstats: Personalstats });
        })
        .catch(err => console.log(err));
}


exports.getPersonalstat = (req, res, next) => {
    const personalstatsId = req.params.personalstatsId;
    Personalstat.findByPk(personalstatsId)
        .then(personalstat => {
            if (!personalstat) {
                return res.status(404).json({ message: 'personalstat not found!' });
            }
            res.status(200).json({ personalstat: personalstat });
        })
        .catch(err => console.log(err));
}


exports.createPersonalstat = (req, res, next) => {
  const document_id = req.body.document_id;
  const match_id = req.body.match_id;
  const player_id = req.body.player_id;
  Personalstat.create({
    document_id: document_id,
    match_id: match_id,
    player_id: player_id
  })
    .then(result => {
      console.log('Created Personalstat');
      res.status(201).json({
        message: 'Personalstat created successfully!',
        Personalstat: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}