export function isValid(number) {
    if (
        isNaN(number) ||
        number === null ||
        number === undefined
    ) {
        return false;
    }
    return true;
}
