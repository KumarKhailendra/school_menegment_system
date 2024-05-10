const { mongooseConnect } = require("@/dbConfig/dbConfig");
const { default: Users_k } = require("@/models/userModel");
const { NextResponse } = require("next/server");
const dynamic = 'force-dynamic';

async function GET(request) {
    await mongooseConnect();
    try {
        const { searchParams } = request.nextUrl;
        const minLevel = searchParams.get("minLevel");
        const maxLevel = searchParams.get("maxLevel");
        
        const user = await Users_k.find({
            level: { $gte: parseInt(minLevel), $lte: parseInt(maxLevel) }
        })
    
        return NextResponse.json({
            msg: "Load Data Success!",
            user
        }, { status: 200 })

    } catch (err) {
        return NextResponse.json({msg: err.message}, { status: 500 });
    }
}

module.exports = { GET, dynamic };
