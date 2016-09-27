var express = require('express');
app.use(express.static('public'));
app.listen(process.env.PORT || 8080);