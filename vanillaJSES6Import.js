import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

const displayFuelCapacity = function() {
    availableAirplanes.forEach(function(element) {
        console.log(`Fuel capacity of ${element.name} : ${element.fuelCapacity}`)
    });
}
const displayStaffStatus = function() {
    availableAirplanes.forEach(function(element) {
        console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
    });
}


displayFuelCapacity();
displayStaffStatus();