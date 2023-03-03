var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Boobs",
    user:"Pakistani Stan",
    added: new Date()
  },
  {
    text: "Dick lol",
    user: "Nick Cage",
    added: new Date()
  }
];

/* GET new page */
router.get('/new', function(req, res) {
  res.render('form', { title: 'Please enter a message'});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

/* POST home page */
router.post('/', (req, res) => {
  res.redirect('/new');
})

/* POST new page */
router.post('/new', (req, res) => {
  const messageText = req.body.message;
  const messageUser = req.body.name;
  
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
});

module.exports = router;
