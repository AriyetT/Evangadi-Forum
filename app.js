require("dotenv").config();

const express = require("express");
const app = express();
const port = 5500;


const cors = require("cors")

app.use(cors())

// db connection
const dbConnection = require("./db/dbconfig");
// user routers middleware file
const userRoutes = require("./routes/userRoute");

// user routers middleware file
const questionsRoutes = require("./routes/questionRout");
// authentication middlewarefil
const authMiddleware = require("./middleware/authMiddleware");

const answerRoutes = require("./routes/answerRouter")

// json middleware to extract json data
app.use(express.json());

// user routers middleware
app.use("/api/users", userRoutes);
// questions routes middleware ??
app.use("/api/questions", authMiddleware, questionsRoutes);
// answers routes middleware ??
app.use("/api/answers", authMiddleware, answerRoutes);


async function start() {
  try {
    const result = await dbConnection.execute("select 'test' ");
    await app.listen(port);
    // console.log("database connection established");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();

//     (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`listening on ${port}`);
//   }
// });
