const NodeMediaServer = require('node-media-server');
const express = require('express')
const cors = require('cors')
const app = express()

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 10000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port:8000,
    allow_origin: '*'
  },
  https: {
    port: 8443,
   key: '/etc/letsencrypt/live/cdn.nodemedia.cn/privkey.pem',
    cert: '/etc/letsencrypt/live/cdn.nodemedia.cn/fullchain.pem',
  }
};

app.use(cors())

app.get('/',(req, res)=>{
  res.send("Yahooo it's working,Party time")
})

app.listen(process.env.PORT || 4000, ()=>{
  console.log('Listening')
})
var nms = new NodeMediaServer(config)
nms.run();
