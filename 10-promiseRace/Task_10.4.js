// ==================== ЗАВДАННЯ 10.4 ====================
/**
 * Створіть функцію, яка конкурує кілька джерел даних
 * і повертає першу успішну відповідь
 * Але якщо всі джерела падають - reject
 */

function unreliableSource(name, delay, shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`${name} failed`));
            } else {
                resolve({ source: name, data: 'Success!' });
            }
        }, delay);
    });
}

/**
 * Спробуйте отримати дані з кількох джерел
 * Поверніть перше успішне
 *
 * @returns {Promise<{source: string, data: string}>}
 */
function getDataFromAnySource() {
    function getDataFromAnySource() {
        const sources = [
            unreliableSource('Source A', 300, true),  // Впаде через 300
            unreliableSource('Source B', 500, false), // Успіх через 500
            unreliableSource('Source C', 200, true)   // Впаде через 200
        ];

        // Використовуємо .any для пошуку першого успішного
        return Promise.any(sources);
    }
    // TODO: Створіть 3 джерела:
    // Source A: delay 300, fails
    // Source B: delay 500, succeeds
    // Source C: delay 200, fails
    // Використайте Promise.race() але обробіть помилки так,
    // щоб продовжити чекати на інші джерела
}

// Перевірка:
getDataFromAnySource()
    .then(result => console.log(' Тест 10.4:', result));
// Очікується: { source: 'Source B', data: 'Success!' }

