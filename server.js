const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   MYSQL CONNECTION
========================= */



/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.send("Backend is working");
});

/* =========================
   GET PROJECTS (FROM DB)
========================= */
const projects = [
  {
    id: 1,
    title: "Calculator",
    description: "Simple JS calculator",
    link: "https://github.com/VK-0-6/calculator-project"
  },
  {
    id: 2,
    title: "Student Record System",
    description: "CRUD app using localStorage",
    link: "https://github.com/VK-0-6/student-record-system"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Full-stack personal portfolio",
    link: "https://github.com/VK-0-6/My_Personal_Portfolio-"
  }
];

app.get("/projects", (req, res) => {
  res.json(projects);
});

/* =========================
   ADD PROJECT 
========================= */


/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});