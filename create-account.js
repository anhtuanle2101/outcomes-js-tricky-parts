function createAccount(pin, amount) {
    let balance = amount || 0;
    let PIN = pin;
    const correctPin = (input)=>PIN===input;
    return {
        checkBalance(pin){
            if (!correctPin(pin)) return `Invalid PIN.`;
            return `$${balance}`;
        },
        deposit(pin, amount){
            if (!correctPin(pin)) return `Invalid PIN.`;
            balance += amount;
            return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
        },
        withdraw(pin, amount){
            if (!correctPin(pin)) return `Invalid PIN.`;
            if (amount > balance) return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
            balance -= amount;
            return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
        },
        changePin(pin, newPin){
            if (!correctPin(pin)) return `Invalid PIN.`;
            PIN = newPin;
            return `PIN successfully changed!`;
        }
    }
}

module.exports = { createAccount };
