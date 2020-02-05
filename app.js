const express = require("express");
const app = express();
const Joi = require("@hapi/joi")
const {data, basicResponse} = require("./data")

const jumplingRouter = require("./src/routes/jumplings")

const participantsArray = data;
const participationHistory = [];

function validateParticipant(participant, next) {
  const schema = Joi.object({
    id: Joi.number().integer(),
    name: Joi.string()
      .min(2)
      .required()
  });
  
  const validation = schema.validate(participant);
  if (validation.error) {
    const error = new Error(validation.error.details[0].message);
    error.statusCode = 400;
    next(error);
  }
  return;
}

app.use(express.json());

app.use("/jumplings", (req, res, next) => {
    req.participantsArray = participantsArray;
    req.participationHistory = participationHistory;
    req.validateParticipant = validateParticipant;
    next();
}, jumplingRouter)

app.get("/", (req, res) => {
  res.status(200).send(basicResponse);
});

app.use((err, req, res, next) => {
  console.log("GOT TO CATCH THEM ALL POKEMON")
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).send(err.message);
});


module.exports = app;