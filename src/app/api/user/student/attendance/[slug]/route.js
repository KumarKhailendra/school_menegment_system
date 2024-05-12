import { mongooseConnect } from "@/dbConfig/dbConfig";
import Attendances from "@/models/attendanceModel";
import Users_k from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
  await mongooseConnect();
  try {
    const { searchParams } = request.nextUrl;
    const standard = searchParams.get("standard");
    const dateString = searchParams.get("date");
    if (!standard || !dateString) {
      return NextResponse.json({ msg: "Both standard and date are required parameters." }, { status: 400 })
    }


    const attendanceData = await Users_k.aggregate([
      
    ]);
    return NextResponse.json({
      msg: "Load Data Success!",
      attendanceData
    }, { status: 200 })

  } catch (err) {
    return NextResponse.json({msg: err.message}, { status: 500 });
  }
}


