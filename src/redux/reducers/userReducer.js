import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.STUDENT_ATTENDANCE:
            return action.payload;
        case GLOBALTYPES.STUDENT_ATTENDANCE_UPDATE:
            const newState = { ...state };
            newState.st_attendance[action.payload.index].attendanceStatus = action.payload.status;
            return newState;
        default:
            return state;
    }
}


export default userReducer