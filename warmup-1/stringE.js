export const stringE = (str) => {
    const count = (str.match(/e/g)).length;
    return count >= 1 && count <= 3;
}