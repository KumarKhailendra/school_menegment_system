const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['present', 'absent'],
        default: 'absent'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Attendance', attendanceSchema);
