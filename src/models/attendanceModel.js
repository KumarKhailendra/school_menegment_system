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

const Attendances = mongoose.models.Attendances || mongoose.model("Attendances", attendanceSchema);

export default Attendances;