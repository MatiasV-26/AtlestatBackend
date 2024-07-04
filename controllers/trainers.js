const Trainer = require('../models/trainer');

// CRUD Controllers

exports.getTrainers = (req, res, next) => {
    Trainer.findAll()
        .then(Trainers => {
            res.status(200).json({ Trainers: Trainers });
        })
        .catch(err => console.log(err));
}


exports.getTrainer = (req, res, next) => {
    const trainerId = req.params.trainerId;
    Trainer.findByPk(trainerId)
        .then(trainer => {
            if (!trainer) {
                return res.status(404).json({ message: 'trainer not found!' });
            }
            res.status(200).json({ trainer: trainer });
        })
        .catch(err => console.log(err));
}


exports.createTrainer = (req, res, next) => {
  const person_id = req.body.person_id;
  const team_id = req.body.team_id;
  Trainer.create({
    person_id: person_id,
    team_id: team_id
  })
    .then(result => {
      console.log('Created Trainer');
      res.status(201).json({
        message: 'Trainer created successfully!',
        Trainer: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}


exports.updateTrainer = (req, res, next) => {
  const trainerId = req.params.trainerId;
  const updateteam_id = req.body.team_id;
  Trainer.findByPk(trainerId)
    .then(trainer => {
      if (!trainer) {
        return res.status(404).json({ message: 'trainer not found!' });
      }
      trainer.team_id = updateteam_id;
      return trainer.save();
    })
    .then(result => {
      res.status(200).json({message: 'trainer updated!', trainer: result});
    })
    .catch(err => console.log(err));
}