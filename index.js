const express = require('express');
const path = require('path')
const app = express();

// app.get('/', (req, res) => {
// res.send(`<h1> Express Server </h1>`)
// res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

//Set Static Folder

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`)
})