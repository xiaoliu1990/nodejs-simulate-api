const internalIp = require('internal-ip');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const doctorList = require('./api/doctor/list');
const entList = require('./api/ent/list');

const ip = internalIp.v4.sync();
const port = 3200;

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(middlewares);
//接口地址
doctorList.install(server);
entList.install(server);

server.listen(port, () => { console.log(`JSON Server is running as http://${ip}:${port}`) })