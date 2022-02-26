const mongoose = require('mongoose')

const TemplateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    html: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(
    'Template', 
    TemplateSchema
)