var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

// Додаємо нову послугу
services["Розбите скло"] = "200 грн";

// Загальна вартість
services.price = function() {

    let total = 0;

    for (let service in this) {

        if (typeof this[service] === "string") {
            total = total + parseFloat(this[service]);
        }
    }

    return total;
};

// Мінімальна ціна
services.minPrice = function() {

    let min = null;

    for (let service in this) {

        if (typeof this[service] === "string") {

            let currentPrice = parseFloat(this[service]);

            if (min === null || currentPrice < min) {
                min = currentPrice;
            }
        }
    }

    return min;
};

// Максимальна ціна
services.maxPrice = function() {

    let max = null;

    for (let service in this) {

        if (typeof this[service] === "string") {

            let currentPrice = parseFloat(this[service]);

            if (max === null || currentPrice > max) {
                max = currentPrice;
            }
        }
    }

    return max;
};


// Перевірка
console.log("Загальна вартість: " + services.price() + " грн");
console.log("Мінімальна ціна: " + services.minPrice() + " грн");
console.log("Максимальна ціна: " + services.maxPrice() + " грн");