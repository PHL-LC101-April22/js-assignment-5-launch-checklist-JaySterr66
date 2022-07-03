// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById('missionTarget');
    
    div.innerHTML = `
        <h2>Mission Destination</h2>
            <ul>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ul>
        <img src="${imageUrl}">
    `;
}
  
function validateInput(testInput) { 
    if (testInput === "" || testInput === null || testInput === 0) {
        return 'Empty'
    }  else if ((!isNaN(Number(testInput)))) {
        return 'Is a Number'
    } else  {
        return 'Not a Number'
    }
}
function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {

//DOM elements
let faultyItems = document.getElementById("faultyItems");
let pilotStatus = document.getElementById('pilotStatus');
let copilotStatus = document.getElementById('copilotStatus');
let fuelStatus = document.getElementById('fuelStatus');
let launchStatus = document.getElementById('launchStatus');
let cargoStatus = document.getElementById('cargoStatus');

// checking to see if all fields are valid

    if (validateInput(pilot.value) === "Is a Number"
    || validateInput(copilot.value) === "Is a Number"
    || validateInput(fuelLevel.value) === "Not a Number"
    || validateInput(cargoLevel.value) === "Not a Number") {
    
    alert('Input Not Valid!');
    } else {
   
        pilotStatus.innerHTML = `Pilot: ${pilot.value}`;
        copilotStatus.innerHTML = `CoPilot: ${copilot.value}`;
            if (fuelLevel.value < 10000) {
                fuelStatus.innerHTML = "Fuel level is too low for takeoff!"
                faultyItems.style.visibility = "visible";
                launchStatus.innerHTML = 'Shuttle not ready for launch';
                launchStatus.style.color = "red";
            } else if (cargoLevel.value > 10000){
                cargoStatus.innerHTML = "Cargo weight is too high for takeoff!";
                faultyItems.style.visibility = "visible";
                launchStatus.innerHTML = 'Shuttle not ready for launch';
                launchStatus.style.color = "red";
             } else {
                launchStatus.innerHTML = "Shuttle ready for launch";
                launchStatus.style.color = "green";
            }
    };
}

async function myFetch() {
    let planetsReturned;

    let planetsResponse = await fetch("https://handlers.education.launchcode.org/static/planets.json") 
      //  console.log(response)
    planetsReturned = planetsResponse.json();
    
    console.log(planetsReturned);
    return planetsReturned;
}

    // let listedPlanets;
    //     //Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    // })

// Below this comment call the appropriate helper functions to pick a planet fom the list of planets & 
//add that information to your destination.

function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random()*planets.length)];
    return planet;
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
