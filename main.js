// Імпортуємо модуль fs (File System) для роботи з файловою системою Node.js
const fs = require("node:fs");

// Читаємо вміст файлу "data.json"
fs.readFile("data.json", (err, data) => {
    // Перевіряємо, чи не виникла помилка під час читання файлу
    if (err === null) {
        // Розпарсюємо вміст файлу JSON в об'єкт
        let jsondata = JSON.parse(data);

        // Фільтруємо дані, залишаючи лише ті, де поле "r030" дорівнює 840
        const filteredData = jsondata.filter(entry => entry.r030 === 840);

        // Створюємо текстовий вихід, об'єднуючи дату та курс обміну з фільтрованих даних
        const outputText = filteredData.map(entry => `${entry.exchangedate}:${entry.rate}`).join('\n');

        // Записуємо отриманий текст у файл "output.txt"
        fs.writeFile('output.txt', outputText, (err) => {
            // Перевіряємо, чи не виникла помилка під час запису в файл
            if (err === null) {
                console.log("Збережено!"); // Виводимо повідомлення про успішне збереження
            } else {
                console.log(err); // Виводимо повідомлення про помилку запису в файл
            }
        });
    } else {
        console.log(err); // Виводимо повідомлення про помилку читання файлу
    }
});
