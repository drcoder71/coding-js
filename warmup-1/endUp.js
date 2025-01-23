export const endUp = (str) => {
    const isLargeFrom3 = (str) => str.length >= 3
    if (!isLargeFrom3) return str.toUpperCase()
    return str.replace(str.slice(-3), str.slice(-3).toUpperCase())
}