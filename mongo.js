
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: true }))

// const db = 'mongodb+srv://johannesjohnsonj:mwWmXZxUnWdDTlA1@usergeodataget.sosuhrg.mongodb.net/?retryWrites=true&w=majority&appName=userGeoDataGet';

mongoose.connect('mongodb+srv://johannesjohnsonj:mwWmXZxUnWdDTlA1@usergeodataget.sosuhrg.mongodb.net/?retryWrites=true&w=majority&appName=userGeoDataGet');

// app.get("/", (req, res) => {
//   res.send('<h1>Hello</h1>')
// })

app.get('/', (req, res) => {
  // res.send(`<h1> Express Server </h1>`)
  res.sendFile(path.join(__dirname, 'index.html'));
  // res.sendFile(path.join(__dirname, 'index.html'));
})

app.use(express.static(__dirname));

const notesSchema =
{
  title: String,
  // content: String,
}

const Note = mongoose.model("Location Data", notesSchema)

app.get("/", function (req, res) {
  res.send("Express is Working")
})

// posting to DB
app.post("/", (req, res) => {
  let newNote = new Note({
    title: req.body.title,
    // content: req.body.content
  })
  newNote.save()
  res.redirect("/")
})

app.listen(3000, () => {
  console.log("Server is Running")
})

// data = {
//   lat: "17.255006262242915",
//   long: "-88.76487418417777"
// }

// const collection = new mongoose.model('geoCodes', geoClickSchema)
// collection.insertMany([data])




