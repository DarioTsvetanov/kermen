const config = require('./config/config');
const routes = require('./routes');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

require('./config/mongoose');

app.listen(config.PORT, console.log(`Server is running on port ${config.PORT}.`));