require('dotenv').config();
const encryptPasswords = require('./src/libs/encryptPasswords');
const sortStrings = require('./src/modules/sortStrings');
const dataLoading = require('./src/modules/dataLoader')
const { createDirectorySync, writeFileSync } = require('./src/modules/fsManager');
const path = require('path');

const passwords = [
    'aQEbH3Cxb3rsT8y#', '2mTa7A9Rq*vrLtv8', 'hXtNLmFsYhJXKQ2@', 'x!D3roaFu&6RF6u2', 'UgGJkgk$zx4Disgv',
    '*@M!B3#i9iQVgM', '@BGn2v45aSo7C!G2*S', '*LaQGJR7#79zQoGt', 'MZzihzs$4Vu@$bAn', 'mrJyUdMfd253$QB7',
    'U A%&LmLc8N*6mvj^', 'depLV@@#uHJ@#6GMUi', '&XKdi6VBz5n%SVDv'];

const url = 'https://jsonplaceholder.typicode.com/users';

encryptPasswords(passwords);

dataLoading(url, (result) => {
    const users = result.data;
    const sortedNames = sortStrings(users.map(user => user.name));
    const sortedEmails = sortedNames.map(name => {
        const user = users.find(user => user.name === name);
        return user.email;
    });
    const usersDir = path.join(__dirname, 'users');
    createDirectorySync(usersDir);
    writeFileSync(path.join(usersDir, 'names.txt'), sortedNames.join('\n'));
    writeFileSync(path.join(usersDir, 'emails.txt'), sortedEmails.join('\n'));
});

console.log(`Текущий мод: ${process.env.MODE}`);