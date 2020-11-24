const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongodb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on('error', () => console.error('Connection error:'));
mongoose.connection.once('open', () => console.log('Database connect'));
