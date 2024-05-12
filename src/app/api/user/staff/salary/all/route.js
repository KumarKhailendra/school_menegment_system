import { mongooseConnect } from "@/dbConfig/dbConfig";
import Salaries from "@/models/salaryModel";
import Users_k from "@/models/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
  await mongooseConnect();
  try {
    const SalarysRecord = await Salaries.find();
    return NextResponse.json({
      msg: "Salary record load successfully!",
      SalarysRecord
    }, { status: 200 })

  } catch (err) {
    return NextResponse.json({msg: err.message}, { status: 500 });
  }
}

