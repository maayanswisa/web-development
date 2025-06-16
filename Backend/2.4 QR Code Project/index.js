/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Type the url to make a QR code",
    },
  ])
  .then((answers) => {
    const url = answers.url;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
    fs.writeFileSync("URL.txt", url);
    console.log("URL.txt Saved");
    console.log("qr_image.png Saved");
  })
  .catch((error) => {
    console.error(error);
  });
