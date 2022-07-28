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
        const wrapper = document.createElement("div");
        wrapper.classList.add("transaction__wrapper");
        wrapper.innerHTML=`<h4>No Transactions Found</h4>`;
        container.append(title,wrapper)
        return container;
    }
}