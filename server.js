const express = require('express');

const app = express();

app.use(express());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname, + "/public/index.html");
});

let port = 8888;
let server = app.listen(port, () => {
    console.log(`App server is running on port ${port}`)
})
