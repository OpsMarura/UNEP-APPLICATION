const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Data = new Schema({
  project_ref: {
    type: String
  },
  country: {
    type: String
  },
  implementing_office: {
    type: String
  },
  project_title: {
    type: String
  },
  grand_amount: {
    type: Number
  },
  dates_from_cgf: {
    type: String
  },
  start_date: {
    type: String
  },
  duration_months: {
    type: Number
  },
  end_date: {
    type: String
  },
  readiness_or_nap: {
    type: String
  },
  type_of_readiness: {
    type: String
  },
  first_disbursement_amount: {
    type: String
  },
  status: {
    type: String
  }
});

module.exports = mongoose.model("Data", Data);
