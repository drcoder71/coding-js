export const loneTeen = (a, b) => {
    const isTeen = (n) => n >= 13 && n <= 19
    return (isTeen(a) && !isTeen(b)) || (!isTeen(a) && isTeen(b))
}