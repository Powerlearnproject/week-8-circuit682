// app.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.use(express.json());

// Import route files
const userRoutes = require('../../routes/user');
const goalRoutes = require('../../routes/goals');
const supportRoutes = require('../../routes/support');
const alcoholConsumptionRoutes = require('../../routes/alcohol_consumption');
const consultationRoutes = require('../../routes/consultations');
const resourceRoutes = require('../../routes/resources');
const selfAssessmentRoutes = require('../../routes/self_assesment');

// Set up routes
app.use('/api/users', userRoutes);
app.use('/api/goals', goalRoutes);
// app.use('/api/support', supportRoutes);
app.use('/api/alcohol-consumption', alcoholConsumptionRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/self-assessment', selfAssessmentRoutes);

// Server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
