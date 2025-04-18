const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/click', async (req, res) => {
  const { link } = req.body;
  const filePath = path.join(__dirname, 'click_data.txt');

  // Read existing data from the file
  let clickData = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    clickData = fileContent.split('\n').filter(line => line).map(line => JSON.parse(line));
  }

  // Update click count or add new link
  let click = clickData.find(item => item.link === link);
  if (click) {
    click.count += 1;
  } else {
    click = { link, count: 1 };
    clickData.push(click);
  }

  // Write updated data back to the file
  const updatedData = clickData.map(item => JSON.stringify(item)).join('\n');
  fs.writeFileSync(filePath, updatedData);

  res.send(click);
});

app.get('/api/clicks', async (req, res) => {
  const filePath = path.join(__dirname, 'click_data.txt');
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const clickData = fileContent.split('\n').filter(line => line).map(line => JSON.parse(line));
    res.send(clickData);
  } else {
    res.send([]);
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

app.post('/api/submit-form', async (req, res) => {
  const { name, email, phone, message, source } = req.body; // Include source
  const filePath = path.join(__dirname, 'unanswered_text.json');

  // Read existing data from the file
  let formData = { submissions: [] };
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    formData = JSON.parse(fileContent);
  }

  // Add new submission with a placeholder for the response
  const newSubmission = {
    id: Date.now(), // Unique ID for the question
    timestamp: new Date().toISOString(),
    name,
    email,
    phone,
    message,
    source: source || 'faq', // Default to 'faq' if no source is provided
    response: null // Placeholder for the response
  };
  formData.submissions.push(newSubmission);

  // Write updated data back to the file
  fs.writeFileSync(filePath, JSON.stringify(formData, null, 2));

  res.status(200).send({ message: 'Form submitted successfully!', submission: newSubmission });
});

app.post('/api/respond', async (req, res) => {
  const { id, response } = req.body;
  const unansweredFilePath = path.join(__dirname, 'unanswered_text.json');
  const answeredFilePath = path.join(__dirname, 'answered_text.json');

  // Read existing data from unanswered_text.json
  if (!fs.existsSync(unansweredFilePath)) {
    return res.status(404).send({ message: 'No unanswered questions found.' });
  }
  const unansweredContent = fs.readFileSync(unansweredFilePath, 'utf-8');
  const unansweredData = JSON.parse(unansweredContent);

  // Find the question by ID and update the response
  const questionIndex = unansweredData.submissions.findIndex((submission) => submission.id === id);
  if (questionIndex === -1) {
    return res.status(404).send({ message: 'Question not found.' });
  }

  const question = unansweredData.submissions[questionIndex];
  question.response = response;

  // Remove the question from unanswered_text.json
  unansweredData.submissions.splice(questionIndex, 1);
  fs.writeFileSync(unansweredFilePath, JSON.stringify(unansweredData, null, 2));

  // Add the question to answered_text.json
  let answeredData = { submissions: [] };
  if (fs.existsSync(answeredFilePath)) {
    const answeredContent = fs.readFileSync(answeredFilePath, 'utf-8');
    answeredData = JSON.parse(answeredContent);
  }
  answeredData.submissions.push(question);
  fs.writeFileSync(answeredFilePath, JSON.stringify(answeredData, null, 2));

  res.status(200).send({ message: 'Response saved successfully!', question });
});

app.get('/api/questions', async (req, res) => {
  const filePath = path.join(__dirname, 'unanswered_text.json');

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const formData = JSON.parse(fileContent);
    res.status(200).send(formData);
  } else {
    res.status(200).send({ submissions: [] });
  }
});

app.get('/api/answered-questions', async (req, res) => {
  const filePath = path.join(__dirname, 'answered_text.json');

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const answeredData = JSON.parse(fileContent);
    res.status(200).send(answeredData);
  } else {
    res.status(200).send({ submissions: [] });
  }
});

app.post('/api/time-spent', async (req, res) => {
  const { link, timeSpent } = req.body;
  const filePath = path.join(__dirname, 'time_data.json');

  // Read existing data from the file
  let timeData = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    timeData = JSON.parse(fileContent);
  }

  // Update time spent or add new link
  let page = timeData.find(item => item.link === link);
  if (page) {
    page.totalTimeSpent += timeSpent;
    page.visits += 1;
  } else {
    page = { link, totalTimeSpent: timeSpent, visits: 1 };
    timeData.push(page);
  }

  // Write updated data back to the file
  fs.writeFileSync(filePath, JSON.stringify(timeData, null, 2));

  res.send(page);
});

app.get('/api/time-spent', async (req, res) => {
  const filePath = path.join(__dirname, 'time_data.json');
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const timeData = JSON.parse(fileContent);
    res.send(timeData);
  } else {
    res.send([]);
  }
});