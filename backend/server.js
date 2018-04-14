const port = process.env.PORT || 3003;
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    cb(null, './uploads');
  },
  filename: (req, file, cb) => {

    const newFilename = `${req.body.description}${path.extname(file.originalname)}`;
    cb(null, newFilename);
  },
});

const upload = multer({ storage });
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', upload.single("upFile"), (req, res) => {
  res.json({msg: 'This is CORS-enabled for all origins!', result: 'done'})
});

app.use(express.static(__dirname + '/uploads'));
app.listen(port, () => console.log(`Server listening on port ${port}`));
