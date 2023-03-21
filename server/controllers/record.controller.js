const Record = require("../models/record.model")

module.exports.createRecord = (request, response) => {
    Record.create(request.body) 
    .then(record => response.json(record))
    .catch(err => response.json(err));
    }
    