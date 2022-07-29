import { Header } from "./Layouts/Header/header"
import { Footer } from "./Layouts/Footer/footer"
import { Main } from "./Layouts/Main/main"
import { Title } from "./Layouts/Main/title"
import { Transactions } from "./Layouts/Main/transaction"

const body=document.querySelector("body")
const root=document.querySelector("#root")

const header = new Header("Budżet Osobisty")
const footer = new Footer("&copy;2020 By @jarek")
const main = new Main("Twoje Aktualne Saldo")
const title = new Title("Twoje transakcje: ")
body.prepend(header.render())
root.append(main.render(),title.render())
body.append(footer.render())
let IncomeArray=[]
let ExpenseArray=[]

function addTransaction(e){
    e.preventDefault()
    const name=e.target[0].value
    const type=e.target[1].checked
    const amount=e.target[3].value
    if(type){
        IncomeArray.push(amount)
    }
    else{
        ExpenseArray.push(-amount)
    }
    const transaction=new Transactions(name,amount,type)
    document.querySelector(".transaction__info").innerHTML=""
    document.querySelector('.transaction__wrapper').append(transaction.render())
    const balanse=(IncomeArray.concat(ExpenseArray).reduce((a,b)=>Number(a)+Number(b),0))
    if(balanse<0){
        document.querySelector(".balance").classList.add("minus")
    }
    else{
        document.querySelector(".balance").classList.remove("minus")
    }
    document.querySelector(".balance").innerHTML=balanse.toFixed(2)
    e.target[0].value=""
    e.target[3].value=""
    eventDeleteTransaction()
}

function eventAddTransaction(){
    const form=document.querySelector(".form")
    form.addEventListener("submit",addTransaction)   
}

function DeleteTransaction(e){
    const amount=e.target.dataset.amount
    
    if(e.target.parentElement.parentElement.classList.contains("plus")){
        IncomeArray.push(-amount)
   
    }
    else{
        ExpenseArray.push(amount)
       
    }
    const balanse=(IncomeArray.concat(ExpenseArray).reduce((a,b)=>Number(a)+Number(b),0))
    if(balanse<0){
        document.querySelector(".balance").classList.add("minus")
    }
    else{
        document.querySelector(".balance").classList.remove("minus")
    }
    document.querySelector(".balance").innerHTML=balanse.toFixed(2)
    e.target.parentElement.parentElement.remove()
}

function eventDeleteTransaction(){
    const deleteButtons=document.querySelectorAll(".transaction__delete")
    deleteButtons.forEach(button=>{
        button.addEventListener("click",DeleteTransaction)
    })    
}

function init(){
    eventAddTransaction()
    
}
    
init()