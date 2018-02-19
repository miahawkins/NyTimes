var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Article Schema
var ArticleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: String
  },
  url: {
    type: String
  }
});

// Create the Article model with Mongoose
var Article = mongoose.model('Article', ArticleSchema);

// Export the Model
module.exports = Article;