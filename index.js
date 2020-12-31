const express = require('express');
var path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');

var indexRouter = require('./routers/index')

app.use(express.static(__dirname + '/public'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/', indexRouter);
app.use(cors({
  origin: 'http://https://openweathermap.org/',
}));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;