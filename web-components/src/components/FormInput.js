const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-direction: row;
            height: 30px;
            box-sizing: border-box;
            border: 4px double black;
        }
        input {
            border: 0;
            outline: 0;
            width: 100%;
            height: 90%;
            background-color: rgb(255, 250, 250);
        }

        .send{
            cursor: pointer;
            height: 20px;
            width: 50px;
            margin: 0px 0px;
        
        }
        .send img{
            cursor: pointer;
            height: 100%;
            width: auto;
        
        }
    </style>
    <input type="text">
    <button class='send' type=submit>
        <img src='https://im0-tub-ru.yandex.net/i?id=0d805ffd0f773af83334b02c1d7b1dae-srl&n=13'></img>
    </button>
    `;


class FormInput extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$input = this.shadowRoot.querySelector('input');
    }

    static get observedAttributes() {
        return ['name', 'value', 'placeholder', 'disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.$input.setAttribute(name, newValue);
    }

    get value() {
        return this.$input.value;
    }
}

customElements.define('form-input', FormInput);
