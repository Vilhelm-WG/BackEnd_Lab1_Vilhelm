// ==================== ЗАВДАННЯ 21.1 ====================
/**
 * Створіть просту чергу FIFO (First In, First Out)
 * Проміси виконуються по черзі, один за одним
 */
class PromiseQueue {
    constructor() {
        this.queue = [];
        this.processing = false;
    }

    add(promiseFactory) {
        // Додаємо в кінець черги
        this.queue.push(promiseFactory);

        // Якщо двигун не запущено — запускаємо
        if (!this.processing) {
            this.processing = true;
            this.process();
        }
    }

    async process() {
        // Поки в черзі є задачі
        while (this.queue.length > 0) {
            // Беремо першу задачу (FIFO)
            const currentTask = this.queue.shift();

            try {
                // Чекаємо її завершення перед тим, як брати наступну
                await currentTask();
            } catch (err) {
                console.error('Task failed:', err);
            }
        }

        // Черга пуста, зупиняємо світлофор
        this.processing = false;
    }
}

// Перевірка:
const queue1 = new PromiseQueue();

queue1.add(() => new Promise(resolve => {
    setTimeout(() => {
        console.log(' Тест 21.1: Task 1 completed');
        resolve(1);
    }, 300);
}));

queue1.add(() => new Promise(resolve => {
    setTimeout(() => {
        console.log(' Тест 21.1: Task 2 completed');
        resolve(2);
    }, 100);
}));

queue1.add(() => new Promise(resolve => {
    setTimeout(() => {
        console.log(' Тест 21.1: Task 3 completed');
        resolve(3);
    }, 200);
}));
// Очікується виконання в порядку: Task 1 → Task 2 → Task 3
