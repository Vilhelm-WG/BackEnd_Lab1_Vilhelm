// ==================== ЗАВДАННЯ 11.3 ====================
/**
 * Завантажити дані з кількох API
 * Використати успішні результати, логувати помилки
 */

function fetchAPI(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url.includes('broken')) {
                reject(new Error(`API ${url} is down`));
            } else {
                resolve({ url, data: `Data from ${url}` });
            }
        }, Math.random() * 300);
    });
}

/**
 * @param {string[]} urls
 * @returns {Promise<{successful: object[], failed: Error[]}>}
 */
async function fetchMultipleAPIs(urls) {
    // 1. Створюємо масив промісів для кожного URL
    const promises = urls.map(url => fetchAPI(url));

    // 2. Чекаємо завершення всіх (незалежно від результату)
    const results = await Promise.allSettled(promises);

    // 3. Формуємо об'єкт з успішними та невдалими запитами
    return {
        successful: results
            .filter(res => res.status === 'fulfilled')
            .map(res => res.value), // Беремо дані з value
        failed: results
            .filter(res => res.status === 'rejected')
            .map(res => res.reason) // Беремо помилку з reason
    };
}

// Перевірка:
const apis = [
    'https://api1.com/data',
    'https://api2-broken.com/data',
    'https://api3.com/data',
    'https://api4-broken.com/data',
    'https://api5.com/data'
];

fetchMultipleAPIs(apis)
    .then(result => {
        console.log(' Тест 11.3:');
        console.log('  Successful:', result.successful.length);
        console.log('  Failed:', result.failed.length);
    });
