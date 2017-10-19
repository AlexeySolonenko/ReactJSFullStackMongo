const express = require('express');
const app = express();
require('./services/passport');
//const authRoutes = require('./routes/authRoutes');
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
