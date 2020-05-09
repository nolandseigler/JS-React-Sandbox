
export let availableAirplanes = [
    {
        name: "AeroJet",
        fuelCapacity: 800,
        availableStaff: [
            "pilots",
            "flightAttendants",
            "engineers",
            "medicalAssistance",
            "sensorOperators"
        ],
        maxSpeed: 1200,
        minSpeed: 300
    },
    {
        name: "SkyJet",
        fuelCapacity: 500,
        availableStaff: [
            "pilots",
            "flightAttendants"
        ],
        maxSpeed: 800,
        minSpeed: 200
    }
];

export let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
};

export const meetsStaffRequirements = function(availableStaff, requiredStaff) {
    return availableStaff.length >= requiredStaff ? true : false;
};

export const meetsSpeedRangeRequirements = function(maxSpeed, minSpeed, requiredSpeedRange) {
    return (maxSpeed - minSpeed) > requiredSpeedRange ? true : false;
};
