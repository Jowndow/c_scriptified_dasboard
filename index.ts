const express = require('express')
const app = express()
const port = 1400

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.redirect('/home/index.html');
});
  
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})