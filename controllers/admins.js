const Admin = require('../models/admin');

// CRUD Controllers

exports.getAdmins = (req, res, next) => {
    Admin.findAll()
        .then(Admins => {
            res.status(200).json({ Admins: Admins });
        })
        .catch(err => console.log(err));
}


exports.getAdmin = (req, res, next) => {
    const adminId = req.params.adminId;
    Admin.findByPk(adminId)
        .then(admin => {
            if (!admin) {
                return res.status(404).json({ message: 'admin not found!' });
            }
            res.status(200).json({ admin: admin });
        })
        .catch(err => console.log(err));
}


exports.createAdmin = (req, res, next) => {
  const contact = req.body.contact;
  const beggining = req.body.beggining;
  const finish = req.body.finish;
  const person_id = req.body.person_id;
  const institution_id = req.body.institution_id;
  Admin.create({
    contact: contact,
    beggining: beggining,
    finish: finish,
    person_id: person_id,
    institution_id: institution_id
  })
    .then(result => {
      console.log('Created Admin');
      res.status(201).json({
        message: 'Admin created successfully!',
        Admin: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}