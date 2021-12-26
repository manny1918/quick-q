const express = require('express');
const router = express.Router();
const Workstation = require('../models/workstation');

router.get('/', async (req, res) => {
    const workstations = await Workstation.find();
    res.render('workstations/index', { workstations });
});

router.get('/new', (req, res) => {
    res.render('workstations/new');
});

router.get('/:id', async (req, res) => {
    const ws = await Workstation.findById(req.params.id);
    res.render('workstations/show', { ws });
});

router.put('/:id', async (req, res) => {
    const ws = await Workstation.findByIdAndUpdate(req.params.id, {...req.body.workstation});
    ws.save();
    res.redirect(`/workstations/${req.params.id}`);
});

router.get('/:id/edit', async (req, res) => {
    const ws = await Workstation.findById(req.params.id);
    res.render(`workstations/edit`, { ws });
});

router.post('/', (req, res) => {
    const ws = new Workstation(req.body.workstation);
    ws.save();
    res.redirect('/workstations');
});






module.exports = router;