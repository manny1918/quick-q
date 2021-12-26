const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workstationSchema = Schema({
    name: String,
});

module.exports = mongoose.model('Workstation', workstationSchema);