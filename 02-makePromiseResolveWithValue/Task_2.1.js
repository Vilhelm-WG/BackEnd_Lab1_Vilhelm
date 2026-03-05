// ==================== ЗАВДАННЯ 2.1 ====================
/**
 * Створіть проміс, який одразу резолвиться зі значенням
 *
 * @param {any} value - Будь-яке значення
 * @returns {Promise<any>}
 */
function makePromiseResolveWith(value) {
    return Promise.resolve(value);
    // return new Promise ((resolve) => {
    // resolve(value)
    // })
}

// Перевірка:
makePromiseResolveWith(5)
    .then(value => console.log(' Тест 2.1:', value)); // Очікується: 5