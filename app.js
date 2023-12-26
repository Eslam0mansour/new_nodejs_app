const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/year', (req, res) => {
  const { name, age } = req.body;
  const year = new Date().getFullYear() - age;
  if (year < 0) {
    res.status(400).send('Invalid age pleas try again with valid age');
  } else {
    res.send(`${name} was born in ${year}`);
  }

});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
