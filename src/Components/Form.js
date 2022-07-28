import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";

export class Form {
    constructor(title) {
        this.title = title;
       
    }
    
    render() {
        const form = document.createElement("form");
        form.classList.add("form");
        const title = document.createElement("h3");
        title.innerText = this.title;
        const rowName = document.createElement("div");
        rowName.classList.add("rowName");
        const labelName = new Label("name", "Name");
        const inputName = new Input("text", "My Salary", "name", "name");
        rowName.append(labelName.render(), inputName.render());
        const rowType = document.createElement("div");
        rowType.classList.add("rowType");
        const labelType = new Label("type", "Type");
        const rowIncome = document.createElement("div");
        rowIncome.classList.add("rowIncome");
        const inputTypeIncome = new Input("radio", "Income", "type","radio");
        const labelTypeIncome= new Label("type", "Income");
        rowIncome.append(inputTypeIncome.render(), labelTypeIncome.render());
        const rowExpense = document.createElement("div");
        rowExpense.classList.add("rowExpense");
        const inputTypeExpense = new Input("radio", "Expense", "type","radio");
        const labelTypeExpense = new Label("type", "Expense");
        rowExpense.append(inputTypeExpense.render(), labelTypeExpense.render());
        rowType.append(labelType.render(),rowIncome, rowExpense);
        const rowAmount = document.createElement("div");
        rowAmount.classList.add("rowAmount");
        const labelAmount = new Label("amount", "Amount");
        const inputAmount = new Input("number", "300", "amount", "amount");
        rowAmount.append(labelAmount.render(), inputAmount.render());
        const button = new Button("Add Transaction");
        form.append(title, rowName, rowType, rowAmount, button.render());
        
        return form;
    }
    }