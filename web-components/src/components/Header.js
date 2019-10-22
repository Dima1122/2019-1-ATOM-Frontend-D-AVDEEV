const template = document.createElement('template');
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
    .Backbutton img{
        height: 25px;
        width: 25px;
        margin: 5px 5px;
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
    
    .settingsButton img{
        height: 25px;
        width: 25px;
        margin: 5px 5px;
    }
    
</style>
<button class='Backbutton'>
    <img src="https://im0-tub-ru.yandex.net/i?id=852e0c5333cc89c73b60862721628775&n=13"</img>
</button>
<div class='chatInfo'>
        <img src=https://im0-tub-ru.yandex.net/i?id=251924006823dd06b0ce06d758f3e6e2&n=13</img>
    <div class='senderInfo'> 
        <div class='data'>Dmitry Avdeev</div>
        <div class='Status'>Status: unknown</div>
    </div>
</div>
<button class='settingsButton'>
    <img src=https://im0-tub-ru.yandex.net/i?id=ef621b5fd3feaec6c0f1a0e9f483a5a7&n=13></img>
</button>
`;


class Header extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('chat-header', Header);
