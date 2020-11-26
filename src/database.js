const mongoose = require('mongoose');

mongoose.connect('mongodb://161.35.114.21:27017/mongodb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on('error', () => console.error('Connection error:'));
mongoose.connection.once('open', () => console.log('Database connect'));
