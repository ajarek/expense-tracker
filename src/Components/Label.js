export class Label {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
  
    render() {
      const label = document.createElement("label");
      label.for = this.id;
      label.innerText = this.text;
      return label;
    }
  }
  