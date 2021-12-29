const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('colors');

require('dotenv').config();
const branch = require('./branch');

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
	res.json({
		message: ' sss /s ',
	});
});

app.use('/branch', branch);

module.exports = app;