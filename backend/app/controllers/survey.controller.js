const db = require("../models");
const Survey = db.Surveys;

// Create and Save a new survey
exports.create = (req, res) => {
    // Validate request
    if (!req.body.surname) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a survey
    const survey = new Survey({
        surname: req.body.surname,
        firstnames: req.body.firstnames,
        contactnumber: req.body.contactnumber,
        date: req.body.date,
        age: req.body.age

    });

    // Save survey in the database
    survey
        .save(survey)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });

};

// Retrieve all surveys from the database.
exports.findAll = (req, res) => {
    const surname = req.query.surname;
    var condition = surname ? { surname: { $regex: new RegExp(surname), $options: "nhlalala" } } : {};

    Survey.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });

};

// Find a single survey with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Survey.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Tutorial with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};

// Update a survey by the id in the request
exports.update = (req, res) => {
    // if (!req.body) {
    //     return res.status(400).send({
    //         message: "Data to update can not be empty!"
    //     });
    // }

    // const id = req.params.id;

    // Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    //     .then(data => {
    //         if (!data) {
    //             res.status(404).send({
    //                 message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
    //             });
    //         } else res.send({ message: "Tutorial was updated successfully." });
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message: "Error updating Tutorial with id=" + id
    //         });
    //     });
};

// Delete a survey with the specified id in the request
exports.delete = (req, res) => {
    // const id = req.params.id;

    // Tutorial.findByIdAndRemove(id)
    //   .then(data => {
    //     if (!data) {
    //       res.status(404).send({
    //         message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
    //       });
    //     } else {
    //       res.send({
    //         message: "Tutorial was deleted successfully!"
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message: "Could not delete Tutorial with id=" + id
    //     });
    //   });
};

// Delete all surveys from the database.
exports.deleteAll = (req, res) => {
    // Tutorial.deleteMany({})
    // .then(data => {
    //   res.send({
    //     message: `${data.deletedCount} Tutorials were deleted successfully!`
    //   });
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while removing all tutorials."
    //   });
    // });
};