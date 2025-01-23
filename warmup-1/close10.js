export const close10 = (a, b) => {
    const diffA = Math.abs(10 - a)
    const diffB = Math.abs(10 - b)

    if (diffA === diffB) return 0
    if (diffA < diffB) return a
    return b
}