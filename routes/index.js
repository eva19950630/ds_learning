var Models = require('../models/models');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: 'Data Structure Learning Website' });
  });

  app.post('/signup', function (req, res) {
  	console.log(req.body);
  	var user;
  	Models.User.find({email:req.body.email}, function(err, user) {
  		if (err)
  			res.send('Unknown error!');
  		else {
  			if (user.length > 0) {
  				req.flash('error', '這個email已被註冊，請重新註冊!');
          res.redirect('/');
        }
  			else {
  				var newUser = new Models.User({username:req.body.username, email:req.body.email, password:bcrypt.hashSync(req.body.password)});
  				newUser.save(function(err) {
  					if (err)
  						res.send('Unknown error!');
  					else {
  						req.flash('success', '你的email已成功註冊!');
              res.redirect('/');
            }
  				});
  			}
  		}		
  	});
  });

  // app.get('/hello', function (req, res) {
  //   res.send('hello world!');
  // });
};