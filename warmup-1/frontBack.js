export const frontBack = (str) => {
    let first = str.charAt(0);
    let last = str.charAt(str.length - 1);
    return str.length > 1 ? last + str.slice(1, -1) + first : str;
}