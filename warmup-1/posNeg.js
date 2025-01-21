export const posNeg = (a, b, negative) => {
    return a < 0 && b < 0 && negative || (a < 0 && b > 0 && !negative) || (a > 0 && b < 0 && !negative);
}