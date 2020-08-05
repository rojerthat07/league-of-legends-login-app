const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/post", verify, (req, res) => {
  res.json({
    posts: {
      title: "my post",
      description: "my description",
    },
  });
});

module.exports = router;
