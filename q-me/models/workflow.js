const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workflowSchema = Schema({
    name: String,
    workstations: []
});

module.exports = mongoose.model('Workflow', workflowSchema);