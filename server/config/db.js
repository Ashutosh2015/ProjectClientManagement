const mongoose = require('mongoose');
const MONGO_URI = NULL;
const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
