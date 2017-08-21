module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: 'Data Structure Learning Website' });
  });

  app.get('/hello', function (req, res) {
    res.send('hello world!');
  });
};