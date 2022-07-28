import { Form } from "../../Components/Form";
export class Main{
    constructor(title){
        this.title = title;
    }
    render(){
       const board =document.createElement("div");
         board.classList.add("board"); 
         const boardHeader= document.createElement("div");
            boardHeader.classList.add("board-header");
            boardHeader.innerHTML = `<p>${this.title}</p>
            <h4 class="bilans">PLN <span>120</span></h4>`
            const form = new Form('Add new transaction');
            board.append(boardHeader, form.render());


                        
        return board;
    }
}