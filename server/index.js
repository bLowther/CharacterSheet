const express = require('express');
const path = require('path');
const morgan = require('morgan');
const router = require('./router/routes.js');
const compression = require('compression');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})