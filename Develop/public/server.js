// require express
const express = required('express');
const path = require('path');

const app = express();
const port = 3001;

// Invoke app.use() and serve static files from the '/public' folder
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

// Create a route that will serve up the `public/index.html` page

app.get('/index', (req, res) =>
res.sendFile(index.join(_dirname, 'public/index.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

