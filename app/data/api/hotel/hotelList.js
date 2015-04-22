'use strict';

var url = require('url');
var querystring = require('querystring');

module.exports = function(req, res) {
  var query = querystring.parse(url.parse(req.url).query);
  var limit = query.limit || 5;
  //console.log(query);
  var data = {
    list: []
  };
  for (var i = 0; i < limit; i++) {
    data.list.push({
      id: i+1,
      name: '北京京仪大酒店' + i,
      address: '北京市海淀区大钟寺东路9号',
      image: 'http://userimg.qunar.com/imgs/201410/25/GIGWX47MHTgwYKxg776.jpg',
      star: '高档',
      price: 100 * (i+1)
    });
  }

  //res.setHeader('Content-Type', 'text/html');
  res.end(JSON.stringify(data));
}
