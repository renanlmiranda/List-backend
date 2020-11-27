const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on('error', () => console.error('Connection error:'));
mongoose.connection.once('open', () => console.log('Database connect'));
