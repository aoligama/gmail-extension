const express = require('express')
const router = express.Router()
const Templates = require('../models/templates')

router.get('/templates', async (req, res) => {
    try {
        const templates = await Templates.find()
        res.json(templates)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/templates/:name', getTemplate, (req, res) => {
    res.json(res.template)
})

router.post('/', async (req, res) => {
    const template = new Template({
        name: req.body.name,
        html: req.body.html
    })

    try {
        const newTemplate = await template.save()
        res.status(201).json(newTemplate)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.patch('/:id', getTemplate, async (req, res) => {
    if(req.body.name != null) {
        res.template.name = req.body.name
    }
    if(req.body.html != null) {
        res.template.html = req.body.html
    }

    try {
        const updateTemplate = await res.template.save()
        res.json(updateTemplate)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.delete('/:id', getTemplate, async (req, res) => {
    try {
        await res.template.remove()
        res.json({
            message: 'Template successfully deleted'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

async function getTemplate(req, res, next) {
    try {
        template = await Template.findById(req.params.id)
        if(template == null) {
            return res.status(404).json({
                message: 'Sorry, this template was not found. Try to create a new one 😁'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    } 

    res.template = template
    next()
}

module.exports = router