const mongoose = require('mongoose');

const schoolUniversitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add your School/University name"],
        trim: true,
    },
    code: {
        type: String,
        required: [true, "Please add your School/University code"],
        trim: true,
    },
    website: {
        type: String,
        required: [true, "Please add your School/University website"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please add your School/University email"],
        trim: true,
    },
    logo_url: {
        type: String,
        required: [true, "Please add your School/University logo url"],
        trim: true,
    },
    telephone: {
        type: String,
        required: [true, "Please add your School/University telephone number"],
        trim: true,
    },
    alternate_telephone: {
        type: String,
        trim: true,
        default: null
    },
    addressLine1: {
        type: String,
        required: [true, "Please add your School/University addressLine1"],
        trim: true,
    },
    addressLine2: {
        type: String,
        required: [true, "Please add your School/University addressLine2"],
        trim: true,
    },
    addressLine3: {
        type: String,
        required: [true, "Please add your School/University addressLine3"],
        trim: true,
    },
    type: {
        type: String,
        enum: ['university', 'school']
    },
    rating: {
        type: Number,
        required: [true, "Please add your School/University rating"],
        trim: true,
    },
    is_active: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

const SchoolUniversities = mongoose.models.SchoolUniversities || mongoose.model("SchoolUniversities", schoolUniversitySchema);

export default SchoolUniversities;