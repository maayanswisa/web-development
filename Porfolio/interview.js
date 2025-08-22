// 1. משתנים
let name = "Maayan"; // let = אפשר לשנות את הערך בהמשך
const year = 2025; // const = ערך קבוע, אי אפשר לשנות

// 2. הדפסה למסוף
console.log("Hello " + name + ", welcome to " + year + "!");

// 3. תנאי
let age = 25;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// 4. מערך ולולאת for
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit #" + (i + 1) + ": " + fruits[i]);
}

// 5. פונקציה
function greet(userName) {
  return "Hi, " + userName + "! Have a great day.";
}

console.log(greet(name));

// 6. פונקציה עם Arrow Function
const add = (a, b) => a + b;
console.log("2 + 3 = " + add(2, 3));
