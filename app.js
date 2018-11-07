const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>Hello World</h1>
     </body>
    </html>
  `);
});

app.get('/puppies', (req, res) => {
  res.send(`
    <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>Puppies</h1>
       <div>
       <img src='https://cdn1-www.dogtime.com/assets/uploads/2010/12/puppies.jpg'>
       </div>
     </body>
    </html>
  `);
});

app.get('/kittens', (req, res) => {
  res.send(`
    <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>Kittens</h1>
       <div><img src="https://www.thesprucepets.com/thmb/dp-HvVRuM14H32PRu9FQmoDDMK0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kitten-looking-at-camera-521981437-57d840213df78c583374be3b.jpg"></div>
     </body>
    </html>
  `);
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
