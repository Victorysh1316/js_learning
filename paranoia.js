const arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Vika",
        lastName: "Test",
        email: "chaika.gmail.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    }
];

const trustedEmails = [];

const pattern = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/i;

for (let i = 0; i < arr.length; i++) {
    if (pattern.test(arr[i].email)) {
        trustedEmails.push(arr[i].email);
    }
}

console.log(trustedEmails);