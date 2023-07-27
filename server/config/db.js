const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://ashutosh2015:Kanha%402015@cluster0.ak50fec.mongodb.net/ProjectClientManagement_DB?retryWrites=true&w=majority'
const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
