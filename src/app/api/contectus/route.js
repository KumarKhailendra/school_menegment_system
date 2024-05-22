const { mongooseConnect } = require("@/dbConfig/dbConfig");
const { default: Contectus } = require("@/models/contectModel");
const { NextResponse } = require("next/server");
const dynamic = 'force-dynamic';

async function POST(request) {
    await mongooseConnect();
    try {
        const reqBody = await request.json()
        const { name, email, text} = reqBody;
        const newContect = new Contectus({ name, email, text });

        await newContect.save();

        return NextResponse.json({
            msg: 'Contect Query Register Success!',
            user: {
                ...newContect._doc,
            }
        }, { status: 200 })

    } catch (err) {
        return NextResponse.json({msg: err.message}, { status: 500 });
    }
}

module.exports = { POST, dynamic };
