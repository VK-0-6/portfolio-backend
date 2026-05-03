const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "bxhz4vsb7h1el3fpptxf-mysql.services.clever-cloud.com",
  user: "u7hvgcugwdilat3l",
  password: "YOUR_PASSWORD",
  database: "bxhz4vsb7h1el3fpptxf",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.log("Connection failed:", err);
    return;
  }

  console.log("Connected ✔");

  const createTable = `
    CREATE TABLE IF NOT EXISTS projects (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      description TEXT,
      link VARCHAR(255)
    )
  `;

  db.query(createTable, (err) => {
    if (err) {
      console.log("Table error:", err);
      return;
    }

    console.log("Table created ✔");

    const insertData = `
      INSERT INTO projects (title, description, link)
      VALUES
      ('Calculator', 'Simple JS calculator', 'https://github.com/VK-0-6/calculator-project'),
      ('Student Record System', 'CRUD app using localStorage', 'https://github.com/VK-0-6/student-record-system'),
      ('Portfolio Website', 'Full-stack personal portfolio', '#')
    `;

    db.query(insertData, (err) => {
      if (err) {
        console.log("Insert error:", err);
      } else {
        console.log("Data inserted ✔");
      }

      process.exit();
    });
  });
});