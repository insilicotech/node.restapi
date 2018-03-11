var restify = require('restify');

function respondGet(req, res, next) {
  res.send('Goodbye (get) ' + req.params.name);
  next();
}

function respondPost(req, res, next) {
  res.send('Goodbye (post) ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/get/:name', respondGet);
server.post('/post/:name', respondPost);

server.listen(8089, function(){
  console.log('%s listening at %s', server.name, server.url);
})
