require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

const PORT = process.env.PORT || 3000;


// Root route
app.get("/", (req, res) => {
  res.send("Server is alive");
});

// Fun fact API route
app.get("/api/fun-fact", async (req, res) => {
  try {
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    );

    res.json({ fact: response.data.text });
  } catch (error) {
    console.error("Error fetching fun fact:", error.message);
    res.status(500).json({ error: "Could not fetch fun fact" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
