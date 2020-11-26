const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on('error', () => console.error('Connection error:'));
mongoose.connection.once('open', () => console.log('Database connect'));
