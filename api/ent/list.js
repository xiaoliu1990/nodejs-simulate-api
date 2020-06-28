const Mock = require('mockjs');
const _ = require('lodash');
const Random = Mock.Random;

const entList = _.range(0, Random.natural(5, 20)).map((index) => {
  return {
    id: index + 1,
    cname: Random.cname(),
    img: Random.image('300x250', Random.color()),
    startTime: Random.datetime('yyyy-MM-dd HH:mm:ss')
  }
});

const install = server => {

  server.get('/ent/list', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(entList);
  });
};

module.exports = { install };