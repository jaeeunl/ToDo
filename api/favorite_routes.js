module.exports = function(app, db) {
  app.get('/favorites', (req, res, next) => {
    db.collection('favorites').find().toArray((err, docs)=> {
      if (err) {
          res.send({'error':'An error has occurred'});
        } else {
          console.log('RESPONSE', res)
          res.send(docs);
        } 
    })
  });
app.post('/favorites', (req, res) => {
    const item = { 
      id: req.body.id,
      title: req.body.title, 
      url: req.body.url,
      favorite: req.body.favorite
    };
    db.collection('favorites').insert(item, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
