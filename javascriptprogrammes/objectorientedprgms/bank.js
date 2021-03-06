class Bank {
    accountcreat(acno, name, minimum_balance) {
        this.acno = acno;
        this.name = name;
        this.minimum_balance = minimum_balance;
    }
    deposit(amount) {
        this.minimum_balance += amount;
        console.log("your account" + this.acno + "has been credited with amount" + amount + "available balance"+this.minimum_balance)
    }
    withdraw(amount) {
        if (this.minimum_balance >= amount) {
            minimum_balance -= amount;
            console.log("your account" + this.acno + "has been debited with amount" + amount + "available balance"+this.minimum_balance)
        }
        else {
            console.log("insufficent balance")

        }
    }

    BalanceEnq() {
        console.log("available balance=" + this.minimum_balance)
    }

}

let obj = new Bank(345676,"ajay", 10000)

obj.BalanceEnq()



