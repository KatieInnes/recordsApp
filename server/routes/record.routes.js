const RecordController = require('../controllers/record.controller')

module.exports = app => {
    app.get('/api/records', RecordController.findAllRecords);
    app.get('/api/records/:id', RecordController.findOneRecord);
    app.put('/api/records/:id', RecordController.updateExistingRecord);
    app.post('/api/records', RecordController.createRecord);
    app.delete('/api/records/:id', RecordController.deleteAnExistingRecord);
}