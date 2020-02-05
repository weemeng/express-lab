const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  // console.log(req.participationHistory);
  res.status(200).send(req.participationHistory);
});

router.post("/", (req, res, next) => {
  const randomSaboGenerator = () => ( Math.floor(
    Math.random() * req.participantsArray.length
  ));
  const randomParticipantIndex = randomSaboGenerator();
  req.validateParticipant(
    req.participantsArray[randomParticipantIndex],
    next
  );
  req.participationHistory.push(req.participantsArray[randomParticipantIndex]);

  res.status(201).send(req.participantsArray[randomParticipantIndex]);
});

module.exports = router;
