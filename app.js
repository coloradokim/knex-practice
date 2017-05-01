const express    = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(process.env.PORT || 8080);
