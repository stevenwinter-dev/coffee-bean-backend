const mongoose = require('mongoose');

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb://localhost/coffee-app';

if (process.env.NODE_ENV === 'production' && !process.env.DB_URL) {
  console.error('❌ DB_URL is not defined in the environment variables!');
  process.exit(1); // Exit the process if DB_URL is missing in production
}

mongoose
  .connect(mongoURI) // No options needed for Mongoose v6+
  .then((instance) =>
    console.log(`✅ Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => {
    console.error('❌ Connection failed!', error);
    process.exit(1); // Exit the process if the connection fails
  });

module.exports = mongoose;