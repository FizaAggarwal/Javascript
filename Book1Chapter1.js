//You don't know JS : Up and Going By Kyle Simpson
//Chapter 1

const BANK_ACCOUNT_BALANCE = 303.91;
const SPENDING_THRESHOLD = 200;

const ACCESSORY_PRICE = 9.99;
const PHONE_PRICE = 99.99;

const TAX_RATE = 0.08;

var amount = 0;

function calculateTax(amt) {
  return amt * TAX_RATE;
}

function formatAmount(amt) {
  return "$" + amt.toFixed(2);
}

while (amount < BANK_ACCOUNT_BALANCE) {
  amount += PHONE_PRICE;

  if (amount < SPENDING_THRESHOLD) {
    amount += ACCESSORY_PRICE;
  }
}

amount = amount + calculateTax(amount);

console.log("Calculated Purchase Amount:", formatAmount(amount));

if (amount > BANK_ACCOUNT_BALANCE) {
  console.log("You have exceeded your bank account balance. Please try again.");
}
