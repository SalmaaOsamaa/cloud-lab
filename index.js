let app = require('express')();
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('APP LISTEN ON p: 5000'));
app.get('/', (req, res) => {
  res.json({
    Hello: 'World',
  });
});
