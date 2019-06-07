const express = require("express");
const app = express();
const handlerRoutes = require("./Routes/files");
const mongoose = require("mongoose");

mongoose.connect(
  `
mongodb+srv://m220student:m220password@firstcluster-babmv.mongodb.net/unepData?retryWrites=true&w=majority
`,
  {
    useNewUrlParser: true
  },
  err => {
    if (!err) {
      console.log("Connected to the MongoDB");
    }
  }
);
app.use("/api", handlerRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log("server started");
});
