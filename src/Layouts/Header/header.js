export class Header {
  constructor(title) {
    this.title = title;
  }
  render() {
    const header = document.createElement("header");
    header.classList.add("header");
    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = this.title;
    header.append(title);
    return header;
  }
}
