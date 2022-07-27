import { Header } from "./Layouts/Header/header";

const header = new Header("Expense Tracker");
document.body.innerHTML = header.render();