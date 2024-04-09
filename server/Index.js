// server.js (or your server file)

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 4000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/hello";

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

// Routes
app.post("/submit-form", async (req, res) => {
  try {
    const formData = req.body;

    // Insert the form data into MongoDB
    const database = client.db();
    const collection = database.collection("Quote");
    await collection.insertOne(formData);

    console.log("Form data inserted into MongoDB:", formData);

    res
      .status(200)
      .json({ success: true, message: "Form data inserted successfully" });
  } catch (error) {
    console.error("Error processing form submission:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
