const express = require('express');
const router = express.Router();
const Company = require('../models/company');

router.get('/company', async (req, res) => {
    const company = await Company.findOne();
    if (company) {
        return res.render('company/show', { company });
    }
    res.render('company/new');
});

router.post('/company', (req, res) => {
    const company = new Company(req.body.company);
    company.save();
    return res.redirect('company');
});

router.get('/company/edit', async (req, res) => {
    const company = await Company.findOne();
    res.render('company/edit', { company });
});

router.put('/company', async (req, res) => {
    const company = await Company.findOneAndUpdate(req.params.id, {...req.body.company});
    company.save();
    res.redirect('company');
});


module.exports = router;