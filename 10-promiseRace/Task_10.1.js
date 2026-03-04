// ==================== ЗАВДАННЯ 10.1 ====================
/**
 * Створіть функцію, яка повертає найшвидшу відповідь
 *
 * @param {number[]} delays - Масив затримок в мілісекундах
 * @returns {Promise<number>} - Найменша затримка
 */
function getFastestResponse(delays) {
    // 1. Створюємо масив промісів
    const promises = delays.map(delay => {
        return new Promise(resolve => {
            setTimeout(() => resolve(delay), delay);
        });
    });

    // 2. Повертаємо результат гонки
    return Promise.race(promises);
}

// Перевірка:
getFastestResponse([1000, 500, 2000, 300])
    .then(result => console.log(' Тест 10.1:', result)); // 300
