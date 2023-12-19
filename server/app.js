const express = require('express');
const cors = require('cors');


const app = express();

require('./db/conn');

app.use(express.json());
app.use(cors());
app.use(require('./routes/bookRoutes'));
app.use(require('./routes/customerRoutes'));
app.use(require('./routes/categoryRoutes'));
app.use(require('./routes/credentialRoutes'));
app.use(require('./routes/bookAuditLogRoutes'));

// Middleware

const middleware = (req, res, next) => {
    console.log('I am Middleware');
    next();
}

// middleware();

app.get('/', (req, res) => {
    res.send('AyBook store, a heaven for Book Readers')
});

app.get('/about', middleware, (req, res) => {
    res.send('ABOUT AyBook store')
});

app.listen(3000, () => {
    console.log('Server is running at port 3000.')
});
