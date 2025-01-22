export const delDel = (str) => {
    const del = str.slice(1, 4)
    return del == 'del' ? str.replace(del, '') : str
}