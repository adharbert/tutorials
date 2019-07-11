var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");
var app = express();

const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const carAPI = require('./routes/cars');

app.use('/api/cars', carAPI);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

var server = app.listen(port, () => console.log(`Server running on port ${port}`));
