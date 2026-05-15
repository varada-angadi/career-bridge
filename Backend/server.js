require('dotenv').config();
const app = require('./src/app');
const connectToDb = require('./src/config/database');
// const generateInterviewReport = require('./src/services/ai.service')
// const {resume, selfDescription, jobDescription} = require('./src/services/temp')
connectToDb();

// generateInterviewReport({resume, selfDescription, jobDescription})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});