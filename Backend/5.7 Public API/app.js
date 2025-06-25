const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const category = req.query.category || "Any";
  const apiUrl = `https://v2.jokeapi.dev/joke/${category}`;

  try {
    const response = await axios.get(apiUrl);
    const joke = response.data;
    res.render("index", { joke, error: null });
  } catch (error) {
    let errorMessage = "שגיאה כללית 🙈";

    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }

    res.render("index", { joke: null, error: errorMessage });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
