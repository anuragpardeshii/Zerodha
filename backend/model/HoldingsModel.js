const { model } = require("mongoose");

const {HoldingsSchema} = require("../schemas/HoldingScema");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports={HoldingsModel};