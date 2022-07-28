export class Button {
  constructor( text) {
    this.text = text;
  }

  render() {
    const button = document.createElement("button");
    button.innerText = this.text;
    return button;
  }
}
