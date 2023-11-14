const person = {
    id: 1, name: "Akash", job: "web-developer"
}
const stringifyed = JSON.stringify(person);

// console.log(person); // { id: 1, name: 'Akash', job: 'web-developer' }

// console.log(stringifyed); // {"id":1,"name":"Akash","job":"web-developer"}


const shop = {
    owner: "Alia",
    address: {
        street: "kochukhet vhut ar goli",
        city: "Ranbir",
        country: "BD",
    },
    products: ["laptop", "mic", "monitor", "keyboard"],
    reveniew: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);


// to convert this object into jsonString
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

// to convert this object into jsonString
const normalObj = JSON.parse(shopJSON);
console.log(normalObj);