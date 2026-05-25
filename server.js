require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ── Routes ────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: "Invalid email address." });
  }

  try {
    // Configure your SMTP credentials via environment variables for production
    // For demo purposes, we log the message
    console.log("── New Contact Form Submission ──");
    console.log(`Name:    ${name}`);
    console.log(`Email:   ${email}`);
    console.log(`Message: ${message}`);
    console.log("─────────────────────────────────");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER || "saranraji.dev@gmail.com",
      subject: `Portfolio Contact Form: ${name}`,
      text: `You have a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    res.json({ success: true, message: "Message received! I'll get back to you soon." });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false, error: "Failed to send message. Please try again." });
  }
});

// Resume download endpoint
app.get("/api/resume", (req, res) => {
  const resumePath = path.join(__dirname, "SARANRAJ - Associate Software Engineer Resume.pdf");
  res.download(resumePath, "SARANRAJ - Associate Software Engineer Resume.pdf", (err) => {
    if (err) {
      res.status(404).json({ error: "Resume file not found." });
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "index.html"));
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀  Portfolio running at http://localhost:${PORT}\n`);
});
