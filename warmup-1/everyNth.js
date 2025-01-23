export const everyNth = (str, N) => {
    let result = '';
    for (let i = 0; i < str.length; i += N) {
        result += str[i];
    }
    return result;
}