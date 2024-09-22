const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Routes

// Register a new user
app.post('/signup', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  // Check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = new User({ username, email, password: hashedPassword });
  await user.save();

  // Generate a token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(201).json({ message: "User created", token });
});

// Login a user
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Generate a token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ message: "Logged in", token });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
