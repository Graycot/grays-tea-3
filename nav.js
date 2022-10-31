define(["text!./template.html"],
    function(template) {
        leftTab.innerHTML = template; 
});


function insertHTML(template) {
  class nav extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = template;
      console.log(template);
    }
  }

  customElements.define('nav-component', nav);
}