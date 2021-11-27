// const apiRoutes = require('./routes/apiRoutes/index.js');
// const htmlRoutes = require('./routes/htmlRoutes/index.js'); 
const path = require('path');

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public.index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
}); 













app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});