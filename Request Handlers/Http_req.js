const express = require("express");
const router = express.Router();
const Service = require("../Collections/Service");

router.get("/", async (req, res) => {
  const Data = await Service.find();
  res.json(Data);
});

router.post("/", (req, res) => {
  const data = new Service({
    name: req.body.name,
    state: req.body.state,
  });

  try {
    const Post = data.save();
    res.json(Post);
  } catch (err) {
    res.status(201).json({ message: err.message });
  }
});

router.put("/:name", (req, res) => {
  Service.updateOne(
    {
      name: req.params.name,
    },
    {
      $set: {
        name: req.body.name,
        state: req.body.state,
      },
    }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log("Updated !!!");
    });
});

router.delete("/:name", (req, res) => {
  Service.deleteOne({
    name: req.params.name,
  }).then((result) => {
    res.json(result);
  });
  Service.deleteMany({})
    .then((result) => {
      console.log(`Data Deleted !`, result);
    })
    .catch((err) => {
      console.log(`Error`, err);
    });
});
module.exports = router;
