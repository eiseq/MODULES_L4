const bcrypt = require('bcrypt');
const saltRounds = 10;

function encryptPasswords(passwords) {
    try {
        for (const password of passwords) {
            const startTime = new Date();
            const hashedPassword = bcrypt.hashSync(password, saltRounds);
            const endTime = new Date();
            const timeTaken = endTime - startTime;
            console.log(`Пароль: ${password}, хэш: ${hashedPassword}, заняли времени: ${timeTaken} ms`);
        }
        console.log(`Время хэширования пароля на одной системы отличается от самого пароля(длинна) и количество прогонов.`)
    } catch (error) {
        console.error('Ошибка при хешировании паролей:', error);
    }
}

module.exports = encryptPasswords;