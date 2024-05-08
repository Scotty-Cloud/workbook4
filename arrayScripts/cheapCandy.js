"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { Product: "Twiz Bar", Price: 4.29 },
  { Product: "Reese's Pieces", Price: 3.49 },
  { Product: "Crunch Bar", Price: 1.99 },
  { Product: "Snickers", Price: 2.49 },
  { Product: "KitKat", Price: 2.99 },
  { Product: "DumDum Pops", Price: 1.49 },
  // price ranges
];

// Which candies costs less than $4.00?
function cheapestCandy(candies) {
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    let price = candies[i].price || candies[i].Price;
    if (price < 4.0) {
      result.push(candies[i]);
    }
  }
  return result;
}
console.log(cheapestCandy(products));
// Which candies has "M&M" in its name?
// Do we carry "Swedish Fish"?
