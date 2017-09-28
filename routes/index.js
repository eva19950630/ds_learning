var Models = require('../models/models');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {
  // app.get('/', redirectToIndexIfLoggedIn, function (req, res) {
  //   res.render('index', {
  //     title: 'Data Structure Learning Website',
  //     login: false
  //   });
  // });
  app.get('/', function (req, res) {
    res.render('index', {
      title: 'Data Structure Learning Website'
    });
  });
  // app.get('/tree_rpg', function (req, res) {
  //   res.render('tree', {
  //     title: 'Tree | Data Structure Learning Website'
  //   });
  // });

  // app.post('/signup', function (req, res) {
  // 	console.log(req.body);
  // 	var user;
  // 	Models.User.find({email:req.body.email}, function(err, user) {
  // 		if (err)
  // 			res.send('Unknown error!');
  // 		else {
  // 			if (user.length > 0) {
  // 				req.flash('error', '這個email已被註冊，請重新註冊!');
  //         res.redirect('/');
  //       }
  // 			else {
  // 				var newUser = new Models.User({username:req.body.username, email:req.body.email, password:req.body.password[0]});
  // 				newUser.save(function(err) {
  // 					if (err)
  // 						res.send('Unknown error!');
  // 					else {
  // 						req.flash('success', '你的email已成功註冊!');
  //             res.redirect('/');
  //           }
  // 				});
  // 			}
  // 		}		
  // 	});
  // });

  // passport.use(new LocalStrategy(
  //   { usernameField: 'email' },
  //   function(email, password, done) {
  //     console.log('email: ' + email);
  //     console.log('password: ' + password);
  //     Models.User.findOne({ email: email }, function (err, user) {
  //       if (err) {
  //         console.log(err);
  //         return done(err); 
  //       }
  //       if (!user) {
  //         console.log('Incorrect email.');
  //         return done(null, false, { message: 'Incorrect email.' });
  //       }
  //       if (!user.validPassword(password)) {
  //         console.log('Incorrect password.');
  //         return done(null, false, { message: 'Incorrect password.' });
  //       }
  //       console.log('Email and Password ok!');
  //       return done(null, user);
  //       // bcrypt.compare(password, user.password, function(err, res) {
  //       //   if (err || res == false) {
  //       //     console.log('Incorrect password.');
  //       //     return done(null, false, { message: 'Incorrect password.' });
  //       //   } else {
  //       //     console.log('Email and Password ok!');
  //       //     return done(null, user);
  //       //   }
  //       // });
  //     });
  //   }
  // ));
  // passport.serializeUser(function(user, done) {
  //   console.log('serializing user: ' + user);
  //   done(null, user.id);
  // });
  // passport.deserializeUser(function(id, done) {
  //   Models.User.findById(id, function(err, user) {
  //     console.log('no user in serial');
  //     done(err, user);
  //   });
  // });

  // app.post('/login',
  //   passport.authenticate('local', { successRedirect: '/index',
  //                                    failureRedirect: '/',
  //                                    failureFlash: true })
  // );

  // app.get('/index', checkLoggedIn, function (req, res) {
  //   res.render('index', {
  //     title: 'Data Structure Learning Website',
  //     success: '你已成功登入!',
  //     isAuthenticated: req.isAuthenticated(),
  //     user: req.user,
  //     login: true
  //   });
  //   // req.flash('success', '你已成功登入!');
  //   res.redirect('/index');
  // });

  // function checkLoggedIn(req, res, next) {
  //   console.log(req.user);
  //   if (req.isAuthenticated())
  //     return next();
  //   else
  //     res.redirect('/');
  // }

  // function redirectToIndexIfLoggedIn(req, res, next) {
  //   if (req.isAuthenticated())
  //     res.redirect('/index');
  //   return next();
  // }

  // app.get('/logout', function(req, res) {
  //   console.log('logout');
  //   req.session.destroy(function (err) {
  //     res.redirect('/');
  //   });
  // });

  // app.get('/hello', function (req, res) {
  //   res.send('hello world!');
  // });
};