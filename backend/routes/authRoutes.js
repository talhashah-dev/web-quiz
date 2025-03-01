const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();


router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) return res.status(400).json({ message: "Email is already registered." });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });

  await newUser.save();
  res.status(201).json({ message: "Registration was successful!" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Incorrect email or password." });
  }

  const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "7d" });
  res.json({ token });
});

router.get("/user", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) return res.status(401).json({ message: "Authentication token is missing!" });

    const decoded = jwt.verify(token, "secretKey");
    const user = await User.findById(decoded.id).select("-password"); 

    if (!user) return res.status(404).json({ message: "User not found!" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
