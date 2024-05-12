import { mongooseConnect } from "@/dbConfig/dbConfig";
import Salaries from "@/models/salaryModel";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
  await mongooseConnect();

    try {
      const salaryId = params.id;
      const reqBody = await request.json();
  
      const updatedAttendance = await Salaries.findByIdAndUpdate(
        salaryId,
        reqBody,
        { new: true }
      );
  
      return NextResponse.json({
        msg: "Update Record Success!",
        updatedAttendance,
      }, { status: 200 });
  
    } catch (err) {
      return NextResponse.json({ msg: err.message }, { status: 500 });
    }
  }
export async function DELETE(request, {params}) {
  await mongooseConnect();

    try {

      const salaryId = params.id;

      await Salaries.findByIdAndDelete(salaryId);

      return NextResponse.json({ msg: "Delete Record Success!"}, { status: 200 });

    } catch (err) {
      return NextResponse.json({ msg: err.message }, { status: 500 });
    }
  }
  