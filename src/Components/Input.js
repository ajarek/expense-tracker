export class Input {
  constructor(type, placeholder, id,name) {
    this.type = type;
    this.placeholder = placeholder;
    this.id = id;
    this.name = name;
  }

  render() {
    const input = document.createElement("input");
    input.type = this.type;
    input.id = this.id;
    input.name = this.name;
    input.placeholder = this.placeholder;
    input.setAttribute("required", true);
    return input;
  }
}
