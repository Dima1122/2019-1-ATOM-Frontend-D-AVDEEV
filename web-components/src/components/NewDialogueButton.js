
/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
<style>
    
    .createDialogueButton {
        display: block;
        border: none;
        cursor: pointer;
        position: absolute; 
        bottom: 0;
        right: 0;
        height: 48px;
        width: 48px;
        background: url(https://www.svgrepo.com/show/33338/pencil.svg);
        margin: 0px 30px 20px 0px;
        overflow: hidden;
        opacity: 0.5;
        transition: 0.3s;
    }
    .createDialogueButton:hover{
      opacity:1;
    }
    .createDialogueButton:focus {
      outline:0;
    }
    .createDialogueButton:active {
      outline:0;
      transform: translateY(-3px);
    }
    
</style>
<button class='createDialogueButton'></button>
`;

class CreateButton extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$button = this.shadowRoot.querySelector('button');
  }

  static openForm() {
    const person = prompt('Enter nickname to start conversation');
    return person;
  }
}

customElements.define('create-button', CreateButton);
