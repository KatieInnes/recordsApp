const Record = require("../models/record.model")

module.exports.createRecord = (request, response) => {
    Record.create(request.body) 
        .then(record => {
            response.json(record)
        })
        .catch(err => response.json(err));
        }
    
module.exports.findOneRecord = (req, res) => {
    Record.findOne({ _id: req.params.id })
        .then(oneRecord => {
            res.json(oneRecord)
        })
        .catch(err => res.json(err));
}
    
module.exports.findAllRecords = (req, res) => {
    Record.find()
        .then((allTheRecords) => {
            res.json(allTheRecords)
        })
        .catch(err => res.json(err));
}

module.exports.updateExistingRecord = (req, res) => {
    Record.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateRecord => {
            res.json(updateRecord)
        })
        .catch(err => res.json(err));
}

module.exports.deleteAnExistingRecord = (req, res) => {
    Record.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => {
            res.json(deleteConfirmation)
        })
        .catch(err => res.json(err));
}