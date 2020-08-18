const mongoose = require('mongoose');

const DweetSchema = mongoose.Schema({
    dweet: String,
    posted_by: String,
}, {
    timestamps: { createdAt: 'posted_at' ,
				updatedAt: 'last_updated_at' } 
});

module.exports = mongoose.model('Dweet', DweetSchema);