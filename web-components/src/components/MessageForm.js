const template = document.createElement('template');
template.innerHTML = `
    <style>
        
        :host {
            width: 100%;
            height: 100%;
            background-color: rgb(176, 224, 230) ;
            display: flex;
            flex-direction: column;
        }
        .header{
            width: 100%;
            background-color: rgb(0,0,137);
        }
        
        .chat {
            width: 100%;
            display: flex;
            flex: auto;
            flex-direction: column-reverse;
            align-content: flex-end;
            overflow: scroll;
            overflow-y: scroll;
        }

        ::-webkit-scrollbar-track
        {
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
          border-radius: 10px;
          background-color: #F5F5F5;
        }

        ::-webkit-scrollbar
        {
          width: 12px;
          background-color: #F5F5F5;
        }
        ::-webkit-scrollbar-thumb
        {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          background-color: #D62929;
        }

        .messagesList{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-end;
            flex-direction: column;
        }
        .message-item{
            box-sizing: border-box;
            width: 100%;
            padding: 0 10px 20px 10px;
        }
        .inputForm {
            width: 100%;
            background-color: rgb(255, 250, 250);
            
            z-index: 1;
        }
        
        input[type=submit] {
            visibility: visible;
        }
    </style>
    
    <div class='header'>
        <chat-header> 
        </chat-header>
    </div>
    <div class='chat'>
        <div class='messagesList'>
        </div>
    </div>
    <div class='inputForm'>
        <form>
            <div class="result"></div>
            <form-input name="message-text" placeholder="Введите сообщение"></form-input>
            
        </form>
    </div>
`;

class MessageForm extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this.$form = this._shadowRoot.querySelector('form');

      this.$input = this._shadowRoot.querySelector('form-input');
      this.$messagesList = this._shadowRoot.querySelector('.messagesList');

      this.$form.addEventListener('submit', this._onSubmit.bind(this));
      this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
      this.Id = 0;
    }

    connectedCallback() {
      if ('chat ' + this.Id in localStorage) {
        this.messages = JSON.parse(localStorage.getItem('chat ' + this.Id));
      } else {
        this.messages = [];
      }
      this.messages.forEach((msg) => {
        let message = this.generateMessage(msg.name, msg.text, msg.timestamp);
        this.$messagesList.appendChild(message);
      });
    }

    _onSubmit(event) {
      event.preventDefault();
      if (this.$input.value.length > 0) {
        var msg = this.generateMessage();
        this.$input.$input.value = '';
        var msg_storage = msg.toObject();
        this.$messagesList.appendChild(msg);
        this.messages.push(msg_storage);
        localStorage.setItem('chat ' + this.Id, JSON.stringify(this.messages));
      }
    }

    generateMessage(Name = 'Avdeev Dmitry', text = this.$input.value, time = null) {
      var msg = document.createElement('message-item');
      if (time) {
        msg.setAttribute('timestamp', time);
      }
      msg.setAttribute('text', text);
      msg.setAttribute('name', Name);

      return msg;
    }


    _onKeyPress(event) {
      if (event.keyCode === 13) {
        this.$form.dispatchEvent(new Event('submit'));
      }
    }
  }

  customElements.define('message-form', MessageForm);
