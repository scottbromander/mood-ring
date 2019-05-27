const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const imagetag = require('./routes/image-tags.router');
const images = require('./routes/images.router');
const tags = require('./routes/tags.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/

app.use('/image', images);
app.use('/tags', tags);
app.use('/imagetags', imagetag);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on PORT: ', port);
});