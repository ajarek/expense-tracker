export class Transactions{
    constructor( name, amount){
        this.name = name;
        this.amount = amount;
    }
    render(){
        const transaction = document.createElement("div");
        transaction.classList.add("transaction");
        
        const card = document.createElement("div");
        card.classList.add("transaction__card");
        card.innerHTML = `
        <div class="transaction__name">${this.name}</div>
        <div class="transaction__row">
        <div class="transaction__amount">PLN ${this.amount}</div>
        <div class="transaction__edit">🖊️</div>
        <div class="transaction__delete">🗑️</div>
        </div>
        `
        transaction.append(card);
        return transaction;
    }       

}