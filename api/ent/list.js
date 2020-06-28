const Mock = require('mockjs');
const _ = require('lodash');
const Random = Mock.Random;

const entList = _.range(0, Random.natural(3, 5)).map((index) => {
  return {
    id: index + 1,
    cname: Random.cname(),
    img: Random.image('100x100', Random.color()),
    startTime: Random.datetime('yyyy-MM-dd HH:mm:ss')
  }
});
const nodata = {
  msg: '暂无数据',
  code: '-1'
}
const install = server => {

  server.post('/ent/list', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({item: entList});
  });

  server.post('/ent/view', (req, res) => {
    let id = req.body.id;
    res.set('Access-Control-Allow-Origin', '*');
    let data = entList.find(item => item.id == id)
    if (!data) {
      data = nodata;
    };
    res.send(data);
  });
};

module.exports = { install };