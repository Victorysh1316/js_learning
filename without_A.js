const text = "Wonderful Joyful Happiness Time Task Apple 434343455";

const pattern = /\b[^aA\s]{6,}\b/g;

const result = text.match(pattern);

console.log(result);