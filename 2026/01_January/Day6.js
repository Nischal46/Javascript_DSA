function InstrumentDetails(brand, country = "default"){
    console.log(`${this.name} in ${this.color} from ${brand} by ${country}`)
}

let instrumentObj = {
    name: "guitar",
    color: "black"
}

InstrumentDetails.call(instrumentObj, "mantra", "nepal");

InstrumentDetails.apply(instrumentObj, ["Deviser", "spain"]);

let bindReadyFunction = InstrumentDetails.bind(instrumentObj, "Dreamer", "Italy");
bindReadyFunction();
