const Institution = require('../models/institution');

// CRUD Controllers

exports.getInstitutions = (req, res, next) => {
    Institution.findAll()
        .then(Institutions => {
            res.status(200).json({ Institutions: Institutions });
        })
        .catch(err => console.log(err));
}


exports.getInstitution = (req, res, next) => {
    const institutionId = req.params.institutionId;
    Institution.findByPk(institutionId)
        .then(institution => {
            if (!institution) {
                return res.status(404).json({ message: 'Institution not found!' });
            }
            res.status(200).json({ institution: institution });
        })
        .catch(err => console.log(err));
}


exports.createInstitution = (req, res, next) => {
  const name = req.body.name;
  const district = req.body.district;
  Institution.create({
    name: name,
    district: district
  })
    .then(result => {
      console.log('Created Institution');
      res.status(201).json({
        message: 'Institution created successfully!',
        Institution: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}


exports.updateInstitution = (req, res, next) => {
  const institutionId = req.params.institutionId;
  const updateName = req.body.name;
  const updateDistrict = req.body.district;
  Institution.findByPk(institutionId)
    .then(institution => {
      if (!institution) {
        return res.status(404).json({ message: 'institution not found!' });
      }
      institution.name = updateName;
      institution.district = updateDistrict;
      return institution.save();
    })
    .then(result => {
      res.status(200).json({message: 'adinstitutionmin updated!', institution: result});
    })
    .catch(err => console.log(err));
}