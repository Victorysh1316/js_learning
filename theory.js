export function checkProbabilityTheory(count) { 
    let even = 0; 
    let odd = 0; 
    for (let i = 0; i < count; i++) { 
        let number = Math.floor(Math.random() * 901) + 100; 
        if (number % 2 === 0) { 
            even++; 
        }             else { 
                odd++; 
            } 
        } 
        let evenPercent = even / count * 100; 
        let oddPercent = odd / count * 100; 
        console.log("Кількість згенерованих чисел: " + count); 
        console.log("Парних чисел: " + even); 
        console.log("Не парних чисел: " + odd); 
        console.log("Відсоток парних до не парних: " + evenPercent + "% / " + oddPercent + "%");
    }
    checkProbabilityTheory(100);