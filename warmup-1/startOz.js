export const startOz = (str) => {
    let result = '';
    if (str.length > 0 && str[0] === 'o') {
        result += 'o';
    }
    if (str.length > 1 && str[1] === 'z') {
        result += 'z';
    }
    return result;
}