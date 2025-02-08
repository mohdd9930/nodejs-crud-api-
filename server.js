require('dotenv').config(); // Load environment variables from .env file
const app = require('./app');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}
).catch((error) => {
  console.log('Error connecting to MongoDB:', error.message);
});
  
  // Start the Express server after successful MongoDB connection
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
