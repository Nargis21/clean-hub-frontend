// export const setToLocalStorage = (key, token) => {
//     if (!key || typeof window === "undefined") {
//         return ""
//     }
//     return localStorage.setItem(key, token)
// }

export const getFromLocalStorage = (key) => {
    if (!key || typeof window === "undefined") {
        return ""
    }
    return localStorage.getItem(key)
}