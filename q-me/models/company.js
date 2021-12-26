const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = Schema({
    name: String,
    logo: String,
    phone: String,
    address: String
});

module.exports = mongoose.model('Company', companySchema);