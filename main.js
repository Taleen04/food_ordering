const menu=[
    { name: "Burger", price: 10 },
    { name: "Pizza", price: 15 },
    { name: "Pasta", price: 12 },
    { name: "Salad", price: 8 },
    { name: "Soda", price: 3 },
    { name: "Ice Cream", price: 5 }
  ] //!menu with name & price
  
  
  function creatRandomOrder(){
    const randomOrderSize=Math.floor(Math.floor(Math.random() * 5)); //!(1-5)
    const orderItems = [];
    for (let i = 0; i < randomOrderSize; i++) {
        const randomItem = menu[Math.floor(Math.random() * menu.length)];
        orderItems.push(randomItem);
    }
    return orderItems;
  }
  const receipts=[]; //!to store order
  
  function receiptCalculation(orderItems){
    const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
    const discount=subtotal>50?subtotal* 0.1:0;
    const tip = (subtotal - discount) * 0.15;
    const total = subtotal - discount + tip;

    return{
      items: orderItems,
      subtotal,
      discount,
      tip,
      total,
    }
  }
  function createReceipt() {
    const orderItems = creatRandomOrder();
    const receipt = receiptCalculation(orderItems);
    receipts.push(receipt);
   // logReceipt(receipts.length, receipt);
}

function logReceipt(receiptNumber, receipt) {
    console.log(`Receipt ${receiptNumber}:`);
    console.log("Items:");
    receipt.items.forEach(item => {
        console.log(` ${item.name}: $${item.price.toFixed(1)}`);
    });
    console.log(`Subtotal: $${receipt.subtotal.toFixed(1)}`);
    console.log(`Discount: $${receipt.discount.toFixed(1)}`);
    console.log(`Tip: $${receipt.tip.toFixed(1)}`);
    console.log(`Total: $${receipt.total.toFixed(1)}`);
    console.log("-----------------------------");
}



function updateSecondReceipt() {
    if (receipts.length >= 2) {
        const secondReceipt = receipts[1];
        const randomItem = menu[Math.floor(Math.random() * menu.length)];
        secondReceipt.items.push(randomItem);

        
        const updatedReceipt = receiptCalculation(secondReceipt.items);
        receipts[1] = updatedReceipt;

        console.log("Updated Receipt 2:");
        logReceipt(2, updatedReceipt);
    }
}
setTimeout(updateSecondReceipt, 2000);

setInterval(createReceipt,5000);




createReceipt();