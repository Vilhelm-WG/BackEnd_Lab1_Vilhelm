// ==================== ЗАВДАННЯ 10.3 ====================
/**
 * Симуляція запитів до різних серверів
 * Поверніть відповідь від найшвидшого сервера
 */

function fetchFromServer(serverName, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                server: serverName,
                data: `Data from ${serverName}`,
                responseTime: delay
            });
        }, delay);
    });
}

/**
 * Отримайте дані від найшвидшого сервера
 *
 * @returns {Promise<{server: string, data: string, responseTime: number}>}
 */
function fetchFromFastestServer() {
    const request = [
        fetchFromServer("Server A", 1000),
        fetchFromServer("Server B", 500),
        fetchFromServer("Server C", 800)
    ];
    return Promise.race(request);
    // TODO: Створіть запити до трьох серверів з різними затримками
    // Server A: 1000ms, Server B: 500ms, Server C: 800ms
    // Поверніть результат від найшвидшого
}

// Перевірка:
fetchFromFastestServer()
    .then(result => console.log(' Тест 10.3:', result));
// Очікується: { server: 'Server B', data: 'Data from Server B', responseTime: 500 }

