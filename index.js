const env = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose');
const config = require('./config/config')[env];
const express = require('express');
const app = express();
const indexRouter = require('./routes');

require('./config/express')(app);
// require('./routes')(app);

try {
  mongoose.connect(
    config.databaseUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log('connected')
  );
} catch (error) {
  console.log('could not connect');
}
// mongoose.connect(
//   config.databaseUrl,
//   {
//     useNewUrlParser: true,
//   },
//   (err) => {
//     console.error(err);
//     throw err;
//   }
// );
app.use('/', indexRouter);
app.get('*', (req, res) => {
  res.render('404', {
    title: 'Error | Cube Workshop',
  });
});
app.listen(
  config.port,
  console.log(`Listening on port ${config.port}! Now its up to you...`)
);
