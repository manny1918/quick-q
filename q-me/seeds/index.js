const mongoose = require('mongoose');
const Company = require('../models/company');

mongoose.connect('mongodb://localhost:27017/q-me', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => {
    console.log('Database connected');
});

const cleanCompanies = async () => {
    await Company.deleteMany({});
    console.log('Company records have been deleted!');
}

const insertCompany = async (name, logo, phoneNumber, address) => {
    const company = new Company({
        name: name,
        logo: logo,
        phoneNumber: phoneNumber,
        address: address
    });
    await company.save();
    console.log('Company saved');
}

cleanCompanies();
