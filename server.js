const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   MYSQL CONNECTION
========================= */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "V@run@6736",
  database: "portfolio"
});

db.connect((err) => {
  if (err) {
    console.log("MySQL connection error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.send("Backend is working");
});

/* =========================
   GET PROJECTS (FROM DB)
========================= */
app.get("/projects", (req, res) => {
  const sql = "SELECT * FROM projects";

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.json({ error: "Failed to fetch projects" });
    }
    res.json(results);
  });
});

/* =========================
   ADD PROJECT (OPTIONAL BUT IMPORTANT)
========================= */
app.post("/projects", (req, res) => {
  const { title, description, link } = req.body;

  const sql = "INSERT INTO projects (title, description, link) VALUES (?, ?, ?)";

  db.query(sql, [title, description, link], (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ error: "Failed to add project" });
    }
    res.json({ message: "Project added successfully" });
  });
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});