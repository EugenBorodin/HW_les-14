//Имеется объект

const obj = {
products: [
    {title: "bottle of wine", price: 35, category: "wines"},
    {title: "1984", price: 15, category: "books", author: "George Orwell"},
    {title: "Iphone XR", price: 400, category: "phones", campera: "12MP"}
    ]
};
//Используя деструктуризацию пулучите в отдельную переменную значение поля author;

const author = obj.products[1].author;
console.log(author);
