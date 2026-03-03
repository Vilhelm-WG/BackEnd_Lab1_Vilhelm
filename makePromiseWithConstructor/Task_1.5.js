// ==================== ЗАВДАННЯ 1.5 ====================
/**
 * Створіть функцію, яка перевіряє вік користувача
 * - age < 0: reject 'Invalid age'
 * - age < 18: reject 'Too young'
 * - age >= 18 та age < 65: resolve {age, category: 'adult'}
 * - age >= 65: resolve {age, category: 'senior'}
 *
 * @param {number} age
 * @returns {Promise<{age: number, category: string}, string>}
 */
function checkAge(age) {
    // TODO: Реалізуйте функцію
}

// Перевірка (розкоментуйте після реалізації):
// checkAge(25).then(console.log).catch(console.error);
// checkAge(70).then(console.log).catch(console.error);
// checkAge(15).then(console.log).catch(console.error);
// checkAge(-5).then(console.log).catch(console.error);
