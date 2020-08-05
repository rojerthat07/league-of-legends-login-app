const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
const { get } = require("mongoose");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { error } = registerValidation(req.body); //validate data

  if (error) return res.status(400).send(error.details[0].message); //return bad request when there is an error in the validation.

  const emailExist = await User.findOne({ email: req.body.email }); //find if email in db if the same with the body.email
  if (emailExist) return res.status(400).send("Email already exists"); //email if already existing

  const salt = await bcrypt.genSalt(10); //Hash password
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const hashedConfirmPassword = await bcrypt.hash(
    req.body.confirmPassword,
    salt
  );

  //creating new user detail
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    confirmPassword: hashedConfirmPassword,
  });

  try {
    //saving the new user detail
    const saveUser = await user.save();
    res.send(saveUser);
  } catch (error) {
    // error will occur when there is in saving the new user detail
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body); //validate data.
  if (error) return res.status(400).send(error.details[0].message); //return bad request when there is an error in the validation.

  const user = await User.findOne({ email: req.body.email }); //find if email in db if the same with the body.email
  if (!user) return res.status(400).send("Email is not found"); //check email if already existing

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password!");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET); //Create and assign token
  res.header("auth-Token", token).send(token);

  res.send("Successfully logged in!");
});

module.exports = router;
