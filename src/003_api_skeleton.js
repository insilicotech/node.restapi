var restify = require('restify');
var server = restify.createServer();
var users = {};
var maxUserID = 0;

//server.use(restify.acceptParser(server.acceptable));
//server.use(restify.bodyParser);
function respond(req, res, next){
    res.send('hello ' + req.params.name );
    next();
}

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

//server.get('/', function(req, res, next){
//    res.setHeader('content-type', 'application/json');
//    res.writeHeader(200);
//    res.end(JSON.stringify(users));
//    return next();
//});

server.post('/user', function(req, res, next){
    user = req.params;
    user.id = ++maxUserID;
    users[maxUserID] = user;

    res.setHeader('content-type', 'application/json');
    res.writeHeader(200);
    res.end(JSON.stringify(user));

    return next();
});

server.listen(8090, function(){
  console.log('%s Start at URL %s', server.name, server.url);
});
