const express = require("express");
const router = express.Router();

const presentersRouter = require("./presenters");
router.use("/presenters", presentersRouter);

router.param("id", (req, res, next, id) => {
  const participantsFilter = req.participantsArray.filter(participant => {
    return id ? id == participant.id : true;
  });
  req.participantsFilter = participantsFilter;
  req.id = id;
  next();
});

router.get("/", (req, res) => {
  res.status(200).send(req.participantsArray);
});
router.post("/", (req, res, next) => {
  req.validateParticipant(req.body, next);
  req.participantsArray.push(req.body);
  res.status(201).send(req.participantsArray[req.participantsArray.length - 1]);
});

router.get("/:id", (req, res) => {
  res.status(200).json(req.participantsFilter);
});

router.put("/:id", (req, res) => {
  // const validation = req.validateParticipant(req.body, next);
  req.participantsArray[req.id] = req.body;
  res.status(200).send(req.participantsArray[req.id]);
});

router.delete("/:id", (req, res) => {
  req.participantsArray = req.participantsArray.filter(participant =>
    participant.id === req.id ? false : true
  );
  res.status(200).json(req.participantsFilter);
});

module.exports = router;
