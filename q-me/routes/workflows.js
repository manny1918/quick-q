const express = require('express');
const Workstation = require('../models/workstation');
const router = express.Router();
const Workflow = require('../models/workflow');

router.get('/', async (req, res) => {
    const wf = await Workflow.find();
    res.render('workflows/index', { wf });
});

router.get('/new', async (req, res) => {
    const ws = await Workstation.find();
    res.render('workflows/new', { ws });
});

router.post('/', (req, res) => {
    let workstations = [];
    let wf = req.body.workflow;
    for (var prop in wf) {
        if (Object.prototype.hasOwnProperty.call(wf, prop)) {
            if (prop !== 'name') {
                if (wf[prop] !== 'Select workstation') {
                    workstations.push(wf[prop]);
                }
            }
        }
    }
    const wfData = new Workflow({
        name: wf['name'],
        workstations: wf['workstations']
    });
    wfData.save();
    res.redirect('/workflows');
});

module.exports = router;