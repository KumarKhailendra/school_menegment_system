'use server'
import Users_k from '@/models/userModel';
const { NextResponse } = require("next/server");
const bcrypt = require('bcrypt');
const dynamic = 'force-dynamic';

async function POST(request) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody;
        if (password.length < 6) return NextResponse.json({msg: "Password must be at least 6 characters."}, { status: 400 });
        const passwordHash = await bcrypt.hash(password, 12);
        await Users_k.findOneAndUpdate({email}, {password: passwordHash});
        return NextResponse.json({ msg: "Reset Password Success!." }, { status: 200 });
    } catch (err) {
        return NextResponse.json({msg: err.message}, { status: 500 });
    }
}

module.exports = { POST, dynamic };
