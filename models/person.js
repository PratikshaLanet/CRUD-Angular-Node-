var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Person = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  userName: {
    type: String
  },
  password: {
    type: String
  },
  userRole: {
    type: String
  },
  isActive: {
    type: Boolean
  },
},{
  collection: 'persons'
});

module.exports = mongoose.model('Person', Person);
