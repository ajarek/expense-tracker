export class Transactions{
    constructor( name, amount,checked){
        this.name = name;
        this.amount = amount;
        this.checked = checked;
    }
    render(){
        const transaction = document.createElement("div");
        transaction.classList.add("transaction");
        if(this.checked){
            transaction.classList.add("plus");
        }   
        else{
            transaction.classList.add("minus");
        }
       
    
        transaction.innerHTML = `
        <div class="transaction__name">${this.name}</div>
        <div class="transaction__row">
        <div class="transaction__amount">PLN ${this.amount}</div>
        <div data-amount="${this.amount}" class="transaction__delete">🗑️</div>
        </div>
        `
       
        return transaction;
    }       

}