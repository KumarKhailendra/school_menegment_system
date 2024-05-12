export const fetchStaffSalary = (standard, date) => async (dispatch) => {
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