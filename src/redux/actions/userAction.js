import { showFailure2Toaster, showFailureToaster } from "@/utils/config";
import { getDataAPI } from "@/utils/fetchData";


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