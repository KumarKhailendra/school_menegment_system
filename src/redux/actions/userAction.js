import { showFailure2Toaster, showFailureToaster } from "@/utils/config";
import { getDataAPI, putDataAPI } from "@/utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";


export const fetchUsersByLevelRange = async (minLevel, maxLevel) => {
    try {
        const res1 =  getDataAPI(`user/findUserByLevel?minLevel=${minLevel}&maxLevel=${maxLevel}`)
        showFailure2Toaster(res1)
        const res =  await res1;
        const data = res.data.user
        return data;
    } catch (err) {
        showFailureToaster(err.response.data.msg)
        return [];
    }
}

export const fetchStudentAttendance = (standard, date) => async (dispatch) => {
    try {
        const res1 =  getDataAPI(`user/student/attendance?standard=${standard}&date=${date}`)
        showFailure2Toaster(res1)
        const res =  await res1;
        dispatch({ 
            type: GLOBALTYPES.STUDENT_ATTENDANCE, 
            payload: {
                st_attendance: res.data.attendanceData
            } 
        })
    } catch (err) {
        showFailureToaster(err.response.data.msg);
    }
}
export const UpdateStudentAttendance = (data, standard, date) => async (dispatch) => {
    try {
        const res1 =  putDataAPI(`user/student/attendance`, data)
        showFailure2Toaster(res1)
        const res2 =  getDataAPI(`user/student/attendance?standard=${standard}&date=${date}`)
        showFailure2Toaster(res2)
        const res =  await res2;
        dispatch({ 
            type: GLOBALTYPES.STUDENT_ATTENDANCE, 
            payload: {
                st_attendance: res.data.attendanceData
            } 
        })
    } catch (err) {
        showFailureToaster(err?.response?.data?.msg);
    }
}