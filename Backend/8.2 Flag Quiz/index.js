import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "mswisa123",
  port: 5432,
});

db.connect();
let quiz = [];
db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    quiz = res.rows;
    db.end();
  }
});
let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  const answer = req.body.answer;

  if (!answer) {
    return res.status(400).send("לא התקבלה תשובה מהמשתמש");
  }

  const trimmedAnswer = answer.trim();
  let isCorrect = false;

  if (currentQuestion.name.toLowerCase() === trimmedAnswer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
