export class Header{
    constructor(title){
        this.title = title;
    }
    render(){
        return `
        <header>
            <div class="header">
                <div class="title">
                    <h1>${this.title}</h1>
                </div>
                
            </div>
        </header>
        `
    }
}