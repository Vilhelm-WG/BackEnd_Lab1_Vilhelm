// ==================== ЗАВДАННЯ 7.1 ====================
/**
 * Створіть ланцюжок, який:
 * 1. Починається з числа 5
 * 2. Множить на 2
 * 3. Додає 10
 * 4. Конвертує в рядок
 *
 * Очікуваний результат: "20"
 */
function simpleChain() {
    return Promise.resolve(5)
        .then(value => {
            return value * 2
        })
        .then (value =>{
            return value + 10
        })
        .then(value =>{
            return value.toString();
        })
    // TODO: Додайте .then() для множення на 2
    // TODO: Додайте .then() для додавання 10
    // TODO: Додайте .then() для конвертації в рядок
}

// Перевірка:
simpleChain()
    .then(result => console.log(' Тест 7.1:', result)); // "20"

