const db = require("../models");
const QuestionsSurvey = db.questionSurvey;

exports.create = (req, res) => {
 
    // Create a Post
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a survey
    const question = new QuestionsSurvey({
         title: req.body.title,
         questions: req.body.questions

    })

    // Save Post in the database
    question
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the survey.",
            });
        });
};

// Find all surveys
exports.findAll = (req, res) => {
    QuestionsSurvey.find({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data.",
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    QuestionsSurvey.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Survey with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Survey with id=" + id });
        });
};

exports.findByTitle = (req, res) => {
    const title = req.params.title;
    QuestionsSurvey.find({ title: title })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Surveys."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    QuestionsSurvey.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Survey with id=${id}. Maybe Survey was not found!`
                });
            } else res.send({ message: "Survey was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Survey with id=" + id
            });
        });
};

exports.patch = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    QuestionsSurvey.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Survey with id=${id}. Maybe Survey was not found!`
                });
            } else res.send({ message: "Survey was patch successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Survey with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    QuestionsSurvey.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Survey with id=${id}. Maybe Survey was not found!`
                });
            } else {
                res.send({
                    message: "Survey was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Survey with id=" + id
            });
        });
};

// Delete all Surveys from the database.
exports.deleteAll = (req, res) => {
    QuestionsSurvey.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Surveys were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Surveys."
            });
        });
};