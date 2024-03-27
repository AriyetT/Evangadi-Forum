const express = require("express")
const route = express.Router()

const {postAnswer, allAnswer} = require("../controller/answerController")

route.post("/postanswers", postAnswer)
route.get("/all-answers", allAnswer)

module.exports = route