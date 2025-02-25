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