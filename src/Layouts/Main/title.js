export class Title{
    constructor(title){
        this.title = title;
    }
    render(){
        const container = document.createElement("div")
        container.classList.add("transaction__container")
        const title = document.createElement("p");
        title.classList.add("transaction__title");
        title.innerHTML = this.title;
        const info = document.createElement("div");
        info.classList.add("transaction__info");
        info.innerHTML = "<h4>Nie znaleziono transakcji</h4>"
        const wrapper = document.createElement("div");
        wrapper.classList.add("transaction__wrapper");
        container.append(title,info,wrapper)
        return container;
    }
}