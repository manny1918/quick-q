const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const Workflow = require('../models/workflow');

router.get('/', async (req, res) => {
    const company = await Company.findOne();
    const workflows = await Workflow.find();
    res.render('queue/index', { company, workflows });
});

router.get('/queue', (req, res) => {
    res.render('queue/index');
});

module.exports = router;