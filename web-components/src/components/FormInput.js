/* eslint-disable no-underscore-dangle */
const template = document.createElement('template')
template.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-direction: row;
            height: 50px;
            box-sizing: border-box;
            background-color: rgba(7, 27, 175, 0.2);
        }
        input {
            border: 0;
            outline: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
        }
        .clip {
            height: 32px;
            width: 40px;
            margin: 5px 15px;
            background: url(https://image.flaticon.com/icons/svg/116/116312.svg);
            background-repeat: no-repeat;
        }
        .btn {
          position: relative;
          overflow: hidden;
          z-index: 1;
          font-family: 'Montserrat Alternates', sans-serif;
          font-weight: 600;
          line-height: 30px;
          color: white;
          font-size: 15px;    
          text-transform: uppercase;
          background: #389ed5;
          border-width: 0;
          box-shadow: 5px 5px 0 #532831;
          outline: none;
          cursor: pointer;
          transition: 1.5s;
        }

        .btn:before, .btn:after {
          content: "";
          position: absolute;
          height: 200px;
          left: -50%;
          margin-top: -100px;
          top: 50%;
          width: 200px;
          border-radius: 50%;
          opacity: 0.3;
          z-index: -1;
          transform: scale(0);
        }
        .btn:before {
          background: #ffeede;
          transition: .8s ease-out;
        }
        .btn:after {
          transition: .4s ease-in .3s;
        }
        .btn:hover {
          color: #532831;
        }
        .btn:hover:before,
        .btn:hover:after{
          opacity: 1;
          transform: scale(4);
        }

    </style>
    <div class='clip'></div>
    <input type="text">
    <button class='btn'>send</button>
`

class FormInput extends HTMLElement {
  constructor() {
    super()
    // eslint-disable-next-line no-underscore-dangle
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))

    this.$input = this.shadowRoot.querySelector('input')
    this.$button = this.shadowRoot.querySelector('.btn')
    this.$button.addEventListener('click', this.ButtonClick.bind(this))
  }

  ButtonClick() {
    this.dispatchEvent(new Event('ButtonClick', { composed: true }))
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue)
  }

  get value() {
    return this.$input.value
  }
}

window.customElements.define('form-input', FormInput)
