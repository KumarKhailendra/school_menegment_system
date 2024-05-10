import { mongooseConnect } from "@/dbConfig/dbConfig";
import Attendance from "@/models/attendanceModel";
import Users_k from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  await mongooseConnect();
  try {
    const { searchParams } = request.nextUrl;
    const standard = searchParams.get("standard");
    const date = searchParams.get("date");
    if (!standard || !date) {
      return NextResponse.json({ msg: "Both standard and date are required parameters." }, { status: 400 })
    }

    const attendanceData = await Users_k.aggregate([
      { $match: { standard, level: 10 } },
      {
        $lookup: {
          from: "attendances",
          localField: "_id",
          foreignField: "studentId",
          as: "attendanceInfo"
        }
      },
      {
        $addFields: {
          attendanceStatus: {
            $cond: {
              if: { $eq: [{ $size: "$attendanceInfo" }, 0] },
              then: "absent",
              else: { $arrayElemAt: ["$attendanceInfo.status", 0] }
            }
          }
        }
      },
      {
        $project: {
          _id: 1,
          fname: 1,
          lname: 1,
          standard: 1,
          attendanceStatus: 1
        }
      }
    ]);

    return NextResponse.json({
      msg: "Load Data Success!",
      attendanceData
    }, { status: 200 })

  } catch (err) {
    return NextResponse.json({msg: err.message}, { status: 500 });
  }
}

export async function PUT(request) {
  await mongooseConnect();
  try {
    const reqBody = await request.json();
    const { studentId, date, status } = reqBody;

    let updatedAttendance;
    const existingAttendance = await Attendance.findOne({ studentId, date });

    if (existingAttendance) {

      updatedAttendance = await Attendance.findOneAndUpdate(
        { studentId, date },
        { status },
        { new: true } 
      );

      return NextResponse.json({
        msg: "Update Data Success!",
        updatedAttendance
      }, { status: 200 });

    } else {
      const newAttendance = new Attendance({ studentId, date, status });

      await newAttendance.save();

      return NextResponse.json({
        msg: "Save Data Success!",
        newAttendance
      }, { status: 200 });
      
    }
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 500 });
  }
}
