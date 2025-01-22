export const backAround = (str) => {
    const lastChar = str.charAt(str.length - 1)
    return lastChar + str + lastChar
}