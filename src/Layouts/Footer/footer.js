export class Footer{
    constructor(title){
        this.title = title;
    }
    render(){
         const footer = document.createElement("footer");
            footer.classList.add("footer");
          footer.innerHTML = `<p>${this.title}</p>`
          return footer;
    }
}