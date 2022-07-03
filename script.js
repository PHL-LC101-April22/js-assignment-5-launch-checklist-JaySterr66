// Write your JavaScript code here!

// Write your JavaScript code here!
//const formSubmission = require("./scriptHelper.js");
// let fuelReady = false;
// let cargoReady = false;
// let fieldCheck;

window.addEventListener("load", function () {
    //const launchForm = document.getElementById("launchForm");
  
    // Adding the planet info
  
     let listedPlanets;
     let listedPlanetsResponse = myFetch();
     listedPlanetsResponse.then(function (result) {
         listedPlanets = result;
         console.log(listedPlanets);
     }).then(function () {
         console.log(listedPlanets);
         let selectedPlanet = pickPlanet(listedPlanets);
         addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);  
     })
    
  
    // When the submit button is hit, the code below will be executed
    let form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // event.stopPropagation();
  
      // These are the DOM elements
      let document = window.document;
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
  
        document.getElementById('launchStatus').innerText = 'Awaiting Information Before Launch';
        document.getElementById('launchStatus').style.color= "black";
        document.getElementById("pilotStatus").innerText = `Pilot ${pilotName.value} Ready`;
        document.getElementById("copilotStatus").innerText = `Co-Pilot ${coPilotName.value} Ready`;
        document.getElementById("fuelStatus").innerText = "Fuel Level high enough for launch";
        document.getElementById("cargoStatus").innerText = "Cargo Mass low enough for launch";
  
        fieldCheck = false;
        cargoReady = false;
        fuelReady = false;
  
  //     let fuelReady = false;
  
  // let cargoReady = false;
  // let fieldCheck;
  
      // let faultyItems = document.getElementsById("faultyItems");
      // let fuelStatus = document.getElementsById("fuelStatus");
      // let launchStatus = document.getElementsById("launchStatus");
      // let pilotStatus = document.getElementsById("pilotStatus");
      // let copilotStatus = document.getElementsById("copilotStatus");
  
      // Check - confirm the form elements have proper values
      
      if (pilotName.value === "" || pilotName.value == null) {
        alert("Pilot name is required");
      }
      // if (!isNaN(pilotName.value)) {
      //   alert("Please enter a valid name for pilot");
      // }
      if (coPilotName.value === "" || coPilotName.value == null) {
        alert("Copilot name is required");
      }
      // if (!isNaN(coPilotName.value)) {
      //   alert("Please enter a valid name for coPilot!");
      // }
      // if (fuelLevel.value === "") {
      //   alert("Fuel Level is required");
      // }
      if (isNaN(fuelLevel.value)) {
        alert("Please enter a valid number for fuel level.");
      }
      if (cargoMass.value === "") {
        alert("Cargo mass is required");
      }
      if (isNaN(cargoMass.value)) {
         alert("Please enter a valid number for cargo.");
      } else {
        event.preventDefault();
      }
  
      // Check - confirm the pilot name & co-pilot name input values are string type
  
      if (isNaN(pilotName.value) || isNaN(coPilotName.value)) {
        pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
        copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready`;
      } else {
        alert("Pilot & Co-pilot names must be letters not numbers!");
        event.preventDefault();
      }
  
      // Check - confirm the fuel level and cargo mass input values are numbers
  
      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
        alert("Fuel level & cargo mass need to be integers!");
        event.preventDefault();
      }
  
      // Check - if fuel level and cargo mass are integers, make these checks below
  
      if (fuelLevel.value < 10000) {
        // Is the fuelLevel value below 10,000?
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = `Fuel level is too low for the journey!`;
        launchStatus.innerHTML = `Shuttle is not ready for launch`;
        launchStatus.style.color = "red";
      } else {
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = `Fuel level is sufficient for launch`;
      }
  
      if (cargoMass.value > 10000) {
        // Is the cargoMass heavier than 10,000?
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = `Cargo mass too heavy for take off!`;
        launchStatus.innerHTML = `Shuttle is not ready for launch`;
        launchStatus.style.color = "red";
      } else {
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
      }
  
      if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
        // If the fuelLevel is equal to or above 10,000 AND cargoMass is equal to or below 10,000, execute this code
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        launchStatus.style.color = "green";
        fuelStatus.innerHTML = `Fuel level is high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
      }
      formSubmission(document, pilotName, coPilotName, fuelLevel, cargoMass);
    });
  });
  
  

