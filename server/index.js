const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
// const {Storage} = require('@google-cloud/storage');

// const storage = new Storage({
//   keyFilename: ,
//   projectId: 'portfolio-388623'
// });

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});