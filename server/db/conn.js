const mongoose = require('mongoose');

const DB = 'mongodb://127.0.0.1:27017/AyBooks';

mongoose.set("strictQuery", true);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
}).then(() => {
    console.log('Database connection successful.');
}).catch((err) => {
    console.log(`Database connection error: ${err}`);
});