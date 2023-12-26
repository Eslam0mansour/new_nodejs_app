const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/year', (req, res) => {
  try { 
     const { name, age } = req.body;
    const year = new Date().getFullYear() - age;
    if (year < 0) {
      res.status(400).json({ message: 'Invalid request' });
    } else {
      res.status(201).json({ name, year, message: 'Your year of birth is ' + year });
    }

  } catch (error) {
    res.status(400).json({ message: 'Invalid request' });
  }
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
