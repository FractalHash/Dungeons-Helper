const express = require('express');
const app = express();
const router = express.Router();
const PORT = prcoess.env.PORT || 5050;

require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.status(200).json("Welcome to the Dungeon Helper server!")
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`)
});

module.exports = router;

