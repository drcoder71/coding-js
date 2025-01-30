export const doubleX = (str) => {
    const index = str.indexOf('x');
    if (index === -1 || index === str.length - 1) {
        return false;
    }
    return str[index + 1] === 'x';
}