const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  end_year: {
    type: String,
  },
  intensity: {
    type: Number,
  },
  sector: {
    type: String,
  },
  topic: {
    type: String,
  },
  insight: {
    type: String,
  },
  url: {
    type: String,
  },
  region: {
    type: String,
  },
  start_year: {
    type: String,
  },
  impact: {
    type: String,
  },
  added: {
    type: String,
  },
  published: {
    type: String,
  },
  country: {
    type: String,
  },
  relevance: {
    type: String,
  },
  title: {
    type: String,
  },
  pestle: {
    type: String,
  },
  source: {
    type: String,
  },
  likelihood: {
    type: String,
  },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
