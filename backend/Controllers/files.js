const path = require("path");
const readXlsxFile = require("read-excel-file/node");
const exam_data = path.join(__dirname, "..", "files", "exam-data.xlsx");
const fs = require("fs");
const xlsx = require("xlsx");
const Data = require("../models/data");
exports.postFile = (req, res, next) => {
  wb = xlsx.readFile(exam_data, { cellDates: true });
  /**
   * wb.sheetNames shall give all the sheets in an array
   * we can map data so that we can have different outcomes of production
   * we must save our data correctly
   *
   */
  const ws = wb.Sheets["firstSheet"];
  const data = xlsx.utils.sheet_to_json(ws);
  Data.create(data, (err, data) => {
    if (err) {
      return res.status(500).send({ success: false });
    }
    return res.status(200).send({ success: true, message: data });
  });
};

exports.getData = (req, res, next) => {
  // let { country } = req.body;
  // country = country.toLowerCase();
  // Data.findOne({ country: { $in: [country] } })
  Data.find({})
    .then(result => {
      return res.status(200).send({
        success: true,
        message: result
      });
    })
    .catch(err => {
      return res.status(500).send({
        success: false,
        message: err
      });
    });
};

exports.getCountryData = (req, res, next) => {
  const country = req.params.country;
  Data.findOne({ country: { $in: [country] } })
    .exec()
    .then(result => {
      return res.status(200).send({
        success: true,
        message: result
      });
    })
    .catch(result => {
      return res.status(500).send({
        success: false,
        error: "sorry for error",
        message: result
      });
    });
};

exports.deleteProject = (req, res, next) => {
  const projectRef = req.params.projectRef;
  Data.findOneAndDelete({ project_ref: projectRef }, (err, result) => {
    if (!err) {
      return res.status(200).send({
        success: true,
        message: result
      });
    }
  });
};

exports.getCompletedProject = (req, res, next) => {
  Data.find({ status: "completed" })
    .exec()
    .then(result => {
      res.status(200).send({
        success: true,
        message: result
      });
    })
    .catch(err => {
      res.status(500).send({
        success: false,
        message: err
      });
    });
};
