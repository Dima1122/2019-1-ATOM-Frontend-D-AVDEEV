const template = document.createElement('template');
template.innerHTML = `
<style>
    *{
        box-sizing: border-box;
    }
    :host {
        display: flex;
        flex-direction: row;
        font-family: sans-serif;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    
    .visuallyHidden {
        position: absolute; 
        overflow: hidden; 
        clip: rect(0 0 0 0); 
        height: 1px; width: 1px; 
        margin: -1px; padding: 0; border: 0; 
    }

    .hamburger {
        margin: 10px;
        width: 30px;
        height: 30px;
        position: relative;
    }
    
    .hamburger .bar {
        padding: 0;
        width: 30px;
        height: 4px;
        background-color: #4eb5e5;
        display: block;
        border-radius: 4px;
        transition: all 0.4s ease-in-out;
        position: absolute; 
    }
    
    .bar1 {
        top: 0;
    }
    
    .bar2,
    .bar3 {
        top: 13.5px;
    }
    
    .bar3 {
        right: 0;
    }
    
    .bar4 {
        bottom: 0;
    }

    .hamburger2 .bar2,
    .hamburger3 .bar3,
    .hamburger4 .bar4 {
        top: 13.5px;
    }

    .hamburger4 .bar5 {
        bottom: 0px;
    }

    .hamburger4 .bar {
        transition: all 0.4s ease-in-out, transform 0.4s ease-in-out 0.4s;
    }

    .hamburger4 .bar2 {
        width: 1px;
        transform: rotate(90deg);
        left: 13.5px;
    }

    .hamburger4 .bar3 {
        width: 1px;
        left: 13.5px;
        
    }

    .checkbox4:checked + label > .hamburger4 > .bar1{
        top: 13.5px;
        background-color: transparent;
    }

    .checkbox4:checked + label > .hamburger4 > .bar2{
        left: 0px;
        width: 30px;
        transform: rotate(45deg);
    }

    .checkbox4:checked + label > .hamburger4 > .bar3{
        left: 0;
        width: 30px;
        transform: rotate(-45deg);
    }

    .checkbox4:checked + label > .hamburger4 > .bar4{
        background-color: transparent;
    }

    .checkbox4:checked + label > .hamburger4 > .bar5{
        bottom: 13.5px;
        background-color: transparent; 
    }

    .messenger{
        flex: auto;
        height: 100%;
        padding-left: 20px;
    }
    
    .searchButton{
        height: 20px;
        width: 20px;
        margin: 5px 15px;
        padding-right: 40px;
    }  
</style>
<input type="checkbox" id="checkbox4"
class="checkbox4 visuallyHidden">
        <label for="checkbox4">
            <div class="hamburger hamburger4">
                <span class="bar bar1"></span>
                <span class="bar bar2"></span>
                <span class="bar bar3"></span>
                <span class="bar bar4"></span>
                <span class="bar bar5"></span>
            </div>
        </label>
<div class='messenger'>Messenger</div>
<div class='searchButton'></div>
`;


class DialoguesHeader extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('dialogues-header', DialoguesHeader);
