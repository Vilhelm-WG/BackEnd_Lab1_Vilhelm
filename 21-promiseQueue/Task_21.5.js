// ==================== ЗАВДАННЯ 21.5 ====================
/**
 * Створіть чергу з автоматичним retry
 * Якщо завдання падає - спробуйте ще раз
 */
class RetryQueue {
    constructor(maxRetries = 3) {
        this.queue = [];
        this.maxRetries = maxRetries;
        this.processing = false;
    }

    add(promiseFactory, retries = 0) {
        // Додаємо об'єкт із завданням та лічильником спроб
        this.queue.push({ promiseFactory, retries });

        if (!this.processing) {
            this.processing = true;
            this.process();
        }
    }

    async process() {
        while (this.queue.length > 0) {
            const { promiseFactory, retries } = this.queue.shift();

            try {
                await promiseFactory();
            } catch (error) {
                if (retries < this.maxRetries - 1) {
                    console.log(`      Log: Retrying task (Attempt ${retries + 2})`);
                    // Повертаємо завдання в чергу, збільшуючи лічильник
                    this.add(promiseFactory, retries + 1);
                    // Перериваємо поточний цикл обробки, щоб дати черзі крутитися далі
                    return;
                } else {
                    console.error(`      Log: Task failed after ${this.maxRetries} attempts`);
                }
            }
        }
        this.processing = false;
    }
}

// Перевірка:
const queue5 = new RetryQueue(3);
let attempt = 0;

queue5.add(() => {
    attempt++;
    console.log(`  Attempt ${attempt}`);
    if (attempt < 3) {
        return Promise.reject(new Error('Failed'));
    }
    return Promise.resolve('Success!');
});

console.log(' Тест 21.5: Черга з retry');
