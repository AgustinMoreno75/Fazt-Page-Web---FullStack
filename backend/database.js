const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected successfully'))
    .catch(err => {
        console.error('Error connecting to the database:', err.message);
        process.exit(1); // Terminate the process if there is a critical error
    });
