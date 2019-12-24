/* eslint-disable no-underscore-dangle */
const template = document.createElement('template')
template.innerHTML = `
<style>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .Backbutton {
        width: 80px;
        height: 40px;
        background: linear-gradient(to bottom, #4eb5e5 0%,#389ed5 100%); /* W3C */
        border: none;
        border-radius: 5px;
        position: relative;
        border-bottom: 4px solid #2b8bc6;
        color: #fbfbfb;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        text-shadow: 1px 1px 1px rgba(0,0,0,.4);
        font-size: 15px;
        text-align: right;
        text-indent: 5px;
        box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
        cursor: pointer;

    }

    .Backbutton:after {
        content: "";
        width: 0;
        height: 0;
        display: block;
        border-top: 20px solid #187dbc;
        border-bottom: 20px solid #187dbc;
        border-right: 16px solid transparent;
        border-left: 20px solid #187dbc;
        position: absolute;
        opacity: 0.6; 
        left: 0;
        top: 0;
        border-radius: 5px 0 0 5px;    
      }

    .chatInfo{
        display:flex;
        height: 100%;
    }
    
    .chatInfo img{
        height: 35px;
        width: 35px;
        margin: 5px 15px;   
        border-radius: 50%;
    }
    .senderInfo {
        display: flex;
        flex-flow: column wrap;
        height: 100%;
        
    }
    
    .settingsButton {
    
        border: none;
        border-radius: 5px;
        position: relative;
        font-size: 15px;
        box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
        cursor: pointer;
        height: 25px;
        width: 25px;
        margin: 5px 5px;
        box-sizing: border-box;

    }
    
</style>
<button class='Backbutton'>Back</button>
<div class='chatInfo'>
        <img src=https://im0-tub-ru.yandex.net/i?id=251924006823dd06b0ce06d758f3e6e2&n=13</img>
    <div class='senderInfo'> 
        <div class='data'>Dmitry Avdeev</div>
        <div class='Status'>Status: unknown</div>
    </div>
</div>
<input type="image" class='settingsButton' src='https://im0-tub-ru.yandex.net/i?id=48aff79a613972e36ec3fe0bb6886909&n=13'/>
`

class ChatHeader extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.$backButton = this.shadowRoot.querySelector('.Backbutton')
    this.$backButton.addEventListener('click', this.backButtonClick.bind(this))
  }

  backButtonClick() {
    this.dispatchEvent(new Event('backButtonClick', { composed: true }))
  }
}

customElements.define('chat-header', ChatHeader)
