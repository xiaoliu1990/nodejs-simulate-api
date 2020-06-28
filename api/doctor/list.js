const Mock = require('mockjs');
const _ = require('lodash');
const Random = Mock.Random;

const doctorList = _.range(0, Random.natural(2, 10)).map((index) => {
  return {
    id: index + 1,
    ctitle: Random.ctitle(10, 20),
    cword: Random.cword(10, 300),
    cname: Random.cname(),
    img: Random.image('300x250', Random.color()),
    updateTime: Random.now('yyyy-MM-dd HH:mm:ss'),
    startTime: Random.datetime('yyyy-MM-dd HH:mm:ss')
  }
});
const nodata = {
  msg: '暂无数据',
  code: '-1'
}

const install = server => {

  server.get('/doctor/list', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(doctorList);
  });

  server.get('/doctor/view', (req, res) => {
    let id = req.query.id;
    res.set('Access-Control-Allow-Origin', '*');
    let data = doctorList.find(item => item.id == id)
    if (!data) {
      data = nodata;
    };
    res.send(data);
  });

};

module.exports = { install };