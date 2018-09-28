const express = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const appdb             = require('./config/db');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(appdb.url, (err, database) => {
  if (err) return console.log(err)

  db = database.db("giphy-favorites")
  require('./api')(app, db);
  app.listen(port, () => {
    console.log('********  We are live on ' + port + '*********');
  });               
})


