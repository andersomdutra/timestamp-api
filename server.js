var express = require('express')
var app = express()

app.get('/*', function (req, res) {
  var param = req.params[0]
  
  if (!isNaN(param)) {
    param = parseInt(param)
  }
  
  var date = new Date(param)
  
  if (!isFinite(date)) {
    res.json({unix: null, natural: null})
  }
  
  res.json({unix: date.getTime(), natural: date.toDateString()})
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
