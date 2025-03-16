function sortStrings(strings) {
    return strings.sort((a, b) => {
        const removeSpace = (string) => string.replace(/\s+/g, '');
        return removeSpace(a).localeCompare(removeSpace(b));
    });
}
module.exports = sortStrings; 