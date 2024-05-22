import { showFailure2Toaster, showFailureToaster } from "@/utils/config";
import { postDataAPI } from "@/utils/fetchData";

export const postContectInfo = async (data) => {
    try {
        const res1 =  postDataAPI(`contectus`, data)
        showFailure2Toaster(res1)
        const res =  await res1;
        console.log(res);
    } catch (err) {
        showFailureToaster(err.response.data.msg)
    }
}