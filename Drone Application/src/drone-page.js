import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import {application} from './app.js';

export class DronePage extends Page{
    constructor(){
        super('Drones');
    }

    createElement(){
        super.createElement();

        let headers = 'license model base latLong airTimeHours'.split(' ');
        let t = new DataTable(headers, application.dataService.drones);
        t.appendToElement(this.element);
    }

    getElementString(){
        return `<div style = "margin:20px;"><h3>Drones</h3></div>`
    }
}