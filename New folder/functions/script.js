function inVal(para) {
    let value = 0;

    for (let i = 0; i < para.length; i++) {
        value = value + (para[i].price * para[i].stock);
    }
    return value
}


function mostexp(para) {
    let prod = "";
    let prize = 0;

    for (let i = 0; i < para.length; i++) {
        if (para[i].price > prize) {
            prize = para[i].price;
            prod = para[i].name;
        }
    }
    return prod
}


function avg(para) {
    let value = 0;
    for (let i = 0; i < para.length; i++) {
        value = value + (para[i].price);
    }
    return value / para.length
}


function mostStock(para) {
    let value = 0;
    let name = "";
    for (let i = 0; i < para.length; i++) {
        if (para[i].stock > value) {
            value = para[i].stock;
            name = para[i].name;
        }
    }
    return name
}


function first(para) {
    for (let i = 0; i < para.length; i++) {
        let isAlvail = "";
        if (para[i].stock > 10) {
            isAlvail = "IN stock";
        } else if (para[i].stock >= 1) {
            isAlvail = "Low stock";
        } else {
            isAlvail = "Not in stock";
        }


        console.log(`${para[i].name} - ₹${para[i].price} | Quantity: ${para[i].stock} | Status: ${isAlvail}`);
    }

}

function display(para) {
    let value1 = 0;
    for (let i = 0; i < para.length; i++) {
        if (mostexp(para) == para[i].name) {
            value1 = para[i].price;
        }
    }

    first(para)

    console.log(`-----------------
Total inventory value: ${inVal(para)}
Most expensive product: ${mostexp(para)} priced at ${value1}
Average cost of product: ${avg(para)}
Most stocked product: ${mostStock(para)}`);

}




const products1 = [
    { name: "Laptop", price: 60000, stock: 10 },
    { name: "Mouse", price: 800, stock: 3 },
    { name: "Keyboard", price: 1200, stock: 0 },
    { name: "Monitor", price: 15000, stock: 7 },
    { name: "Headphones", price: 2500, stock: 2 }
];

const products2 = [
  { name: "Apples", price: 100, stock: 200},
  { name: "Bananas", price: 40, stock: 3 },
  { name: "Mangos", price: 60, stock: 0 },
  { name: "Kivi", price: 200, stock: 1 },
  { name: "Orange", price: 55, stock: 500 }
];
display(products1);
display(products2);
