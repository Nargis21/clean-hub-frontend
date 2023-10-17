import jwtDecode from "jwt-decode"

export const decodedToken = (token) => {
    return jwtDecode(token)
}