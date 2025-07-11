import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  //console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";
  if (day === 4 || day === 5 || day === 6) {
    type = "a weekend";
    adv = "it's time to have FUN";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
