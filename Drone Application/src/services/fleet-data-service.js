import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataErrors} from './data-errors.js';

export class FleetDataService{

    constructor(){
    this.cars = [];
    this.drones = [];
    this.errors = [];
    } 

    getCarByLicense(license)
    {
        return this.cars.find(function(car){
            return car.license === license;
        });
    }

    filterCarBymake(filtText){
        return this.cars.filter(car => car.make.indexOf(filtText) >= 0);
    }
    
    getCarsSortedByLicense(){
        return this.cars.sort(function(car1,car2){
            if(car1.license < car2.license){
                return -1;
            }
            if(car1.license > car2.license){
                return 1;
            }
            return 0;
        });
    }
    loadData(fleet){
        
        for(let data of fleet)
        {
            switch(data.type){
                case 'car':
                    if(this.validateCarData(data))
                    {
                    let car = this.loadCar(data);
                    this.cars.push(car);
                     }
                    else{
                         let e = new DataErrors('invalid car data', data);
                         this.errors.push(e);
                     }
                     break;
                case 'drone':
                    if(this.validateDroneData(data)){
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                }
                   else{
                        let e = new DataErrors('Invalid drone data',data);
                        this.errors.push(e);
                    }
                    break;
                default:
                    let e = new DataErrors("Invalid vehicle type",data);
                    this.errors.push(e);
            }
        }
    }
    loadCar(car){
        try{
            let c = new Car(car.license, car.model);
            c.make = car.make;
            c.roadTimeHours = car.roadTimeHours;
            c.miles = car.miles;
            return c;
        }
        catch(e){
            this.errors.push(new DataErrors('Error Loading Car Data',car));
        }
        return null;
    }
    loadDrone(drone){
        try{let d = new Drone(drone.license, drone.model)
            d.base = drone.base;
            d.latLong = drone.latLong;
            d.airTimeHours = drone.airTimeHours;
            return d;
        }
        catch(e){
            this.errors.push(new DataErrors('Error Loading Drone Data',drone));
        }
        return null;
    }
    validateCarData(car){
        let requiredProps = 'license model make miles roadTimeHours'.split(' ');
        let hasErrors = false;
        for(let field of requiredProps){
            if(!car[field]){
                this.errors.push(new DataErrors('Invalid Field Entry',car));
                hasErrors = true;
            }
        }
        if(Number.isNaN(Number.parseFloat(car.miles)))
        {
            this.errors.push(new DataErrors('Invalid mileage',car));
            hasErrors = true;
        }
        return !hasErrors;
    }
    validateDroneData(drone){
        let requiredProps = 'license model base latLong airTimeHours'.split(' ');
        let hasErrors = false;
        for(let field of requiredProps){
            if(!drone[field]){
                this.errors.push(new DataErrors('Invalid Field Entry',drone));
                hasErrors = true;
            }
        }
        return !hasErrors;
    }
}