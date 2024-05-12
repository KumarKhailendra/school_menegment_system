import { mongooseConnect } from "@/dbConfig/dbConfig";
import Salaries from "@/models/salaryModel";
import Users_k from "@/models/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request, {params}) {
  await mongooseConnect();
  try {
    const staffId = params.id;
    const reqBody = await request.json()
    let { amount } = reqBody;
    const SalarysRecord = await Salaries.findOne({ staffId });
    if (SalarysRecord) return NextResponse.json({msg: 'Salarys Record already exists. Please Click Update button'}, { status: 400 });
    const newSalary = new Salaries({ staffId, amount, date: new Date() });
    await newSalary.save();
    return NextResponse.json({
      msg: "Salary record added successfully!",
      newSalary
    }, { status: 200 })

  } catch (err) {
    return NextResponse.json({msg: err.message}, { status: 500 });
  }
}

export async function GET(request, {params}) {
  await mongooseConnect();
  try {
    const staffId = params.id;

    const SalarysRecord = await Salaries.findOne({ staffId });

    if (!SalarysRecord) return NextResponse.json({msg: 'Your data not exist, Please contact to admin'}, { status: 400 });
    
    return NextResponse.json({
      msg: "Salary record added successfully!",
      SalarysRecord
    }, { status: 200 })

  } catch (err) {
    return NextResponse.json({msg: err.message}, { status: 500 });
  }
}

