import {Vehicle} from './vehicle.js';
export class Drone extends Vehicle{
    constructor(license,model){
        super(license,model);
        this.airTimeHours = null;
        this.latLong = null;
        this.base = null;
    }
}
