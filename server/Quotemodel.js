const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/hello")
  .then(() => {
    console.log("connection success");
  })
  .catch((error) => {
    console.log(error);
  });
// Define the schema for the form data
const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// Create the model
const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
