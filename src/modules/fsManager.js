const fs = require('fs');
const path = require('path');

function createDirectorySync(dirPath) {
    try {
        fs.mkdirSync(dirPath, { recursive: true });
    } catch (err) {
        console.error(`Ошибка создания директории: ${err.message}`);
    }
}

function writeFileSync(filePath, data) {
    try {
        fs.writeFileSync(filePath, data);
    } catch (err) {
        console.error(`Ошибка записи файла: ${err.message}`);
    }
}

module.exports = {
    createDirectorySync,
    writeFileSync
};