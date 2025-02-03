const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();


router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) return res.status(400).json({ message: ".ایمیل قبلاً ثبت شده است" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });

  await newUser.save();
  res.status(201).json({ message: "!ثبت‌نام موفقیت‌آمیز بود" });
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: ".ایمیل یا رمز عبور اشتباه است" });
  }

  const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "7d" });
  res.json({ token });
});

module.exports = router;
