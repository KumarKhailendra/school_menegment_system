const { mongooseConnect } = require("@/dbConfig/dbConfig");
const { default: SchoolUniversities } = require("@/models/schoolUniversityModel");
const { NextResponse } = require("next/server");
const dynamic = 'force-dynamic';

async function POST(request) {
    await mongooseConnect();
    try {
        const reqBody = await request.json()
        const { name, code, website, email, logo_url, telephone, alternate_telephone, addressLine1, addressLine2, addressLine3, type, rating } = reqBody;
        const SchoolUniversity = await SchoolUniversities.findOne({ name, code, email });
        if (SchoolUniversity) return NextResponse.json({msg: 'This record are already present'}, { status: 400 });
        const newSchoolUniversity = new SchoolUniversities({ name, code, website, email, logo_url, telephone, alternate_telephone, addressLine1, addressLine2, addressLine3, type, rating });
        await newSchoolUniversity.save();
        return NextResponse.json({
            msg: 'School/University Register Success!',
            newSchoolUniversities: {
                ...newSchoolUniversity._doc,
            }
        }, { status: 200 })

    } catch (err) {
        return NextResponse.json({msg: err.message}, { status: 500 });
    }
}

async function GET(request) {
    await mongooseConnect();
    try {
        const schools = await SchoolUniversities.find({ type: "school", is_active: true }).sort({ rating: -1 }).limit(5);
        const university = await SchoolUniversities.find({ type: "university", is_active: true }).sort({ rating: -1 }).limit(5);
        return NextResponse.json({
            msg: 'School/University load Success!',
            schools,
            university
        }, { status: 200 })

    } catch (err) {
        return NextResponse.json({msg: err.message}, { status: 500 });
    }
}
module.exports = { POST, GET, dynamic };
