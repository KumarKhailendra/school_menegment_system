import { mongooseConnect } from "@/dbConfig/dbConfig";
import Attendances from "@/models/attendanceModel";
import Users_k from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  await mongooseConnect();
  try {
    const { searchParams } = request.nextUrl;
    const standard = searchParams.get("standard");
    const dateString = searchParams.get("date");
    if (!standard || !dateString) {
      return NextResponse.json({ msg: "Both standard and date are required parameters." }, { status: 400 })
    }
    const date = new Date(dateString);

    // const queryDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const lookupAttendancePipeline = [
      {
        $match: { $expr: { $eq: ["$studentId", "$$studentId"] } }
      },
      {
        $match: {
          $expr: {
            $eq: [{ $dateToString: { format: "%Y-%m-%d", date: "$date" } }, "$$date"]
          }
        }
      }
    ];

    const defaultAttendance = {
      attendanceStatus: "absent",
      attendanceDate: ""
    };

    const attendanceData = await Users_k.aggregate([
      { $match: { standard, level: 10 } },
      {
        $lookup: {
          from: "attendances",
          let: { studentId: "$_id", date: date.toISOString().slice(0, 10) },
          pipeline: lookupAttendancePipeline,
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
          },
          attendanceDate: {
            $cond: {
              if: { $eq: [{ $size: "$attendanceInfo" }, 0] },
              then: null,
              else: { $arrayElemAt: ["$attendanceInfo.date", 0] }
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
          attendanceStatus: 1,
          attendanceDate: 1
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
    const existingAttendance = await Attendances.findOne({ studentId, date });

    if (existingAttendance) {

      updatedAttendance = await Attendances.findOneAndUpdate(
        { studentId, date },
        { status },
        { new: true } 
      );

      return NextResponse.json({
        msg: "Update Data Success!",
        updatedAttendance
      }, { status: 200 });

    } else {
      const newAttendance = new Attendances({ studentId, date, status });

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
