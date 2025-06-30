const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// POST endpoint to receive message
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('📩 Message Received:', { name, email, message });

  // Optional: Save to database or send email
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
