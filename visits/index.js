const express = require('express');
const redis = require('redis');
const process = require('process')
const app = express();
// In client specify  the name of the servce/container running
// redis server. In the client paramtere we can alos pass the 
// redis port "port : 6379" which is the deafult port for redis
const client = redis.createClient({
    host : 'redis-server',
    port : 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    process.exit(0)
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});