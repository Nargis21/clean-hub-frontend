import { getFromLocalStorage } from "./local-storage";
import { decodedToken } from "./jwt";

export const getUserInfo = () => {
    const authToken = getFromLocalStorage('accessToken')
    console.log(authToken, "accesstoken");
    if (authToken) {
        const decodedData = decodedToken(authToken);
        return decodedData;
    }
    else {
        return ""
    }

}

export const isLoggedIn = () => {
    const authToken = getFromLocalStorage('accessToken')
    return !!authToken
}