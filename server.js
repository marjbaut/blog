const express = require('express');
const routes = require('./controllers');
const PORT = 3005;
const app = express();

app.use(routes);

app.listen(PORT,()=> {
    console.log('work')
})