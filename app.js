const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.js');
const propertyRoutes = require('./routes/properties.js');
const authMiddleware = require('./middleware/auth.js');

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect('mongodb+srv://ghanshyamkushwah623:579tpJQnWw528A9p@cluster0.fi6v6lj.mongodb.net/realstate', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', authMiddleware, propertyRoutes);

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
