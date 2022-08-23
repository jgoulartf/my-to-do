const express = require('express');
const app = express()
const port = 3000


/* GET home page. */
app.get('/', async (req, res) => {
  const db = require("./db.js");
  const toDos = db.Mongoose.model('todos', db.toDoSchema, 'todos');
  
  const docs = await toDos.find({}).lean().exec();
  res.send({ docs });
  
});

/* GET home page. */
app.get('/add', async (req, res) => {
  const { ToDo } = require("./db.js");
  
  const t = new ToDo({
    toDo: "Lavar louca",
    done: false,
    createdAt: new Date() 
  });
  
  t.save();
  res.send("Saved!")
});



app.listen(port, () => {
  console.log(`to-do server listening on port ${port}`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
