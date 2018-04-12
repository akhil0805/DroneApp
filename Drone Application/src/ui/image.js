import {BaseElement} from './base-element.js'

export class Image extends BaseElement{
    constructor(fileName){
        super();
        this.fileName = fileName;
    }

    getElementString(){
        return `<img src= "${this.fileName}" width="100%" height="80%">`
    }
}