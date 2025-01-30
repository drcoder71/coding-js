export const frontTimes = (str, n) => {
    let res = ""
    if (!(str.length)) return res
    for (let i = 0; i < n; i++) {
        res = res + str.slice(0, 3)
    }
    return res
}