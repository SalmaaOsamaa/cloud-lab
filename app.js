let app = require('express')();

app.listen(3000, () => console.log('APP LISTEN ON p: 3000'));
app.get('/', (req, res) => {
  res.json({
    Hello: 'World',
  });
});
