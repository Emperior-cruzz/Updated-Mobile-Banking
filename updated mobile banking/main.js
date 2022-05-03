const balance = document.getElementById("balance");
const amount = document.getElementById("withdraw");
const button = document.getElementById("btn");
const pin = 1234;
const passcode;
let userBalance;

// adding an event to the button 'onclick'.
button.addEventListener("click", () => {
  //initial account balance.
  userBalance = 1000000;

  //amount to be withdrawn.
  let withdrawalAmount = amount.value;

  if (withdrawalAmount <= userBalance) {
    userBalance -= withdrawalAmount;

    if (confirm('Input your passcode to continue ?')) {
      passcode = prompt('Input your pin');
      if (passcode == pin) {
        balance = `Current Balance : $${userBalance}`
        alert('Withdrawal Succesful')
      } else {
        alert('Incorrect Passcode')
      }

    } else {
      alert('Insufficient Balance')
    } else {
    alert("Transaction  Unsuccessful");
  }
});
