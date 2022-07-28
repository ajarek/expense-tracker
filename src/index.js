import { Header } from "./Layouts/Header/header"
import { Footer } from "./Layouts/Footer/footer"
import { Main } from "./Layouts/Main/main"
import { Title } from "./Layouts/Main/title"
import { Transactions } from "./Layouts/Main/transaction"

const body=document.querySelector("body")
const root=document.querySelector("#root")

const header = new Header("Budżet Osobisty")
const footer = new Footer("&copy;2020 By @jarek")
const main = new Main("Your Current Balance")
const title = new Title("Your Transactions: ")
body.append(header.render(),footer.render())
root.append(main.render(),title.render())