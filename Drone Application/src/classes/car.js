import {Vehicle} from './vehicle.js';
export class Car extends Vehicle{
    constructor(license,model){
        super(license,model);
        this.make = null;
        this.miles = null;
        this.roadTimeHours = null;
    }
}