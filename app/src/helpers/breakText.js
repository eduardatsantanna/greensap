export const breakText = (text, value = 13) => {
    if (text.length > value) {
        return `${text.substr(0, (value - 3))}...`;
    }
    return text;
}