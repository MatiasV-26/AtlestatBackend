const Person = require('../models/person');

// CRUD Controllers

exports.getPersonas = (req, res, next) => {
    Person.findAll()
        .then(Personas => {
            res.status(200).json({ Personas: Personas });
        })
        .catch(err => console.log(err));
}


exports.getPerson = (req, res, next) => {
    const personId = req.params.personId;
    Person.findByPk(personId)
        .then(person => {
            if (!person) {
                return res.status(404).json({ message: 'Person not found!' });
            }
            res.status(200).json({ person: person });
        })
        .catch(err => console.log(err));
}


exports.createPerson = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;
  const nationality = req.body.nationality;
  const birth = req.body.birth;
  const gender = req.body.gender;
  Person.create({
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    nationality: nationality,
    birth: birth,
    gender: gender

  })
    .then(result => {
      console.log('Created Person');
      res.status(201).json({
        message: 'Person created successfully!',
        Person: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}