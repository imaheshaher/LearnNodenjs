const { EventEmitter } = require("events");
const event = require("events")

var eventEmitter = new event.EventEmitter();
eventEmitter.on("speak",function(name) {
    console.log(name,"si spreaking")
})

eventEmitter.emit("speak","Peter")