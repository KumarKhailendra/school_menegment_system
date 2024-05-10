import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.STUDENT_ATTENDANCE:
            return action.payload;
        case GLOBALTYPES.STUDENT_ATTENDANCE_UPDATE:
            return state;
        default:
            return state;
    }
}


export default userReducer