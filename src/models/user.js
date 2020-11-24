// const mongoose = require('../database');
const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.set('useCreateIndex', true);

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  maritalStatus: {
    type: String,
    enum: ['single', 'married', 'widow/widower', 'divorced', 'separated'],
    default: 'single',
  },
  cpf: {
    type: String,
    unique: 'cpf already registered',
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
