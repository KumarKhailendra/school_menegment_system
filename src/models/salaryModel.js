const mongoose = require('mongoose');

const SalarySchema = new mongoose.Schema({
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const Salaries = mongoose.models.Salaries || mongoose.model("Salaries", SalarySchema);

export default Salaries;