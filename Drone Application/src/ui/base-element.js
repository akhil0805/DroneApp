import $ from 'jquery';

export class BaseElement{
    
    constructor(){
        this.element = null;
    }

    appendToElement(e1)
    {
        this.createElement();
        e1.append(this.element);
        this.enableJS();
    }

    createElement(){
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString(){
        throw 'Please override getElementString() in base class';
    }

    enableJS(){
        componentHandler.upgradeElement(this.element[0]);
    }
}
