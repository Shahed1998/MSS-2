const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/Public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('login');
});

app.listen(process.env.PORT || port, () => {
  console.log(`App running at port ${port}`);
});
