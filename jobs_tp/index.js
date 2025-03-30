const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Path to your JSON file
const dataFilePath = path.join(__dirname, "objet1.json");

// Get all jobs (Read the JSON file)
app.get("/jobs", (req, res) => {
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading data" });
    }
    res.json(JSON.parse(data));
  });
});
app.post("/jobs", (req, res) => {
    const newJob = req.body;
  
    // Validate the new job data
    if (!newJob || !newJob.titre || !newJob.description || !newJob.salaire || !newJob.date_de_creation) {
      console.log("Incomplete job data:", newJob);  // Log if data is incomplete
      return res.status(400).json({ message: "Incomplete job data" });
    }
  
    // Read the current jobs from the JSON file
    fs.readFile(dataFilePath, "utf8", (err, data) => {
      if (err) {
        console.log("Error reading file:", err);  // Log read error
        return res.status(500).json({ message: "Error reading data" });
      }
  
      const jobs = JSON.parse(data);
      newJob.id = Date.now();  // Simple unique ID based on timestamp
      jobs.push(newJob);
  
      // Write the updated jobs back to the JSON file
      fs.writeFile(dataFilePath, JSON.stringify(jobs, null, 2), (err) => {
        if (err) {
          console.log("Error writing file:", err);  // Log write error
          return res.status(500).json({ message: "Error saving job" });
        }
        console.log("New job added:", newJob);  // Log the new job added
        res.status(201).json(newJob);
      });
    });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
const cors = require('cors');
app.use(cors());
fs.writeFile(dataFilePath, JSON.stringify(jobs, null, 2), (err) => {
    if (err) {
      console.log("Error writing to file:", err);  // Log any errors while writing to the file
      return res.status(500).json({ message: "Error saving job" });
    }
    console.log("File updated successfully"); // Log success
    res.status(201).json(newJob);
  });
  

