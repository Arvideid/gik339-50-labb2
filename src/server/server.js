const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const server = express();

// Middleware för JSON och URL-encoded data
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// CORS-inställningar enligt uppgiftskraven
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

// GET route för /users
server.get("/users", (req, res) => {
  const db = new sqlite3.Database("./gik339-labb2.db");
  
  db.all("SELECT * FROM users", (err, rows) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.send(rows);
      }
  });
});

// Starta servern
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
}); 