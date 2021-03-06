/*******************************************************
 * Inventory Management - An example of a discrete event simulation.
 * @copyright Copyright 2016 Gerd Wagner, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
********************************************************/
/*******************************************************
 General Variables and Methods
********************************************************/

/*******************************************************
 Simulation Parameters
********************************************************/
sim.scenario.simulationEndTime = 100;
//sim.scenario.randomSeed = 5;  // optional
sim.config.createLog = true;

/*******************************************************
 Simulation Model
********************************************************/
sim.model.time = "discrete"; // implies using only discrete random variables
sim.model.timeUnit = "D";  // days

sim.model.objectTypes = ["SingleProductShop"];
sim.model.eventTypes = ["DailyDemand", "Delivery"];

/*******************************************************
 Define the initial state
 ********************************************************/
// Either declaratively:
sim.scenario.initialState.objects = {
  "1": {typeName: "SingleProductShop", name:"TV Shop",
    quantityInStock: 80, reorderInterval: 4, targetInventory: 100}
};
sim.scenario.initialState.events = [
  {typeName: "DailyDemand", occTime:1, quantity:25, shop:"1"}
];
// Or with a procedure:
/*
sim.scenario.setupInitialState = function () {
  var tvShop = new SingleProductShop({
    id: 1, name:"TV",
    quantityInStock: 80,
    reorderLevel: 50,
    targetInventory: 100
  });
  sim.addObject( tvShop);
  sim.scheduleEvent( new DailyDemand({occTime:1, quantity:25, shop: tvShop}));
}
*/
/*******************************************************
 Define Output Statistics Variables
 ********************************************************/
sim.model.statistics = {
  "lostSales": {range:"NonNegativeInteger", label:"Lost"},
  "averageInventory": {objectType:"SingleProductShop", objectIdRef: 1,
    property:"quantityInStock", aggregationFunction:"avg", label:"Avg. inventory"}
};
