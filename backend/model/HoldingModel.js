const { model } = require("mongoose");

const {HoldingsSchema} = require("../schema/HoldingScema");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports={HoldingsModel};