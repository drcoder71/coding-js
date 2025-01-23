export const max1020 = (a, b) => {
    const inRange = (n) => n >= 10 && n <= 20;

    if (inRange(a) && inRange(b)) return Math.max(a, b)
    if (inRange(a)) return a
    if (inRange(b)) return b
    return 0
}