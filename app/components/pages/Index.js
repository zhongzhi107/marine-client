
'use strict';

var React = require('react');
var PageActions = require('../../actions/PageActions');
var App = require('../layout/App');
var Link = require('../common/Link');
var Tile = require('../common/Tile');

var HomePage = React.createClass({

  statics: {
      layout: App,

      // for SEO
      meta: {
        title: 'Qunar.com - 聪明你的旅行',
        keywords: '机票,飞机票,机票查询,飞机票查询,机票预订,特价机票,机票预定,打折机票',
        description: '去哪儿Qunar.com提供机票,飞机票,特价机票,打折机票的查询预订；99元春秋航空特惠折扣机票，百元南航、海航惊喜特价机票任您挑选,国航、深航1折特价机票和折扣机票一网打尽，更多打折机票尽在Qunar.com。实时提供上百家旅游预订网站机票报价和航空公司直销机票价格，为您找到最实惠的飞机票信息,是你查询特价机票和机票预订的最佳途径。',
      }
  },

  getInitialState: function() {
    return {
      name: 'xxx'
    };
  },

  componentWillMount() {
    PageActions.set({title: HomePage.meta.title});
  },

  componentDidMount() {
    var self = this;
    var $ = require('jquery');
    $.get('/api/test', function(result) {
      if (self.isMounted()) {
        self.setState({
          name: result.name
        });
      }
    });
  },

  render() {
    return (
      /* jshint ignore:start */
      <div className="homepage">
        <div className="channel pure-g">
          <Tile to="/gongyu" width="1" height="1" bgColor="#f55">公寓</Tile>
          <Tile to="/gongyu" width="1" height="1" bgColor="#f55">钟点房</Tile>
          <Tile to="/gongyu" width="1" height="1" bgColor="#7e57c2">接送用车</Tile>
          <Tile to="/gongyu" width="1" height="1" bgColor="#7e57c2">特价机票</Tile>
        </div>
        <div className="channel pure-g">
          <Tile to="/hotellist/city-北京" width="2" height="2" bgColor="#f55">酒店</Tile>
          <Tile to="/flight" width="2" height="2" bgColor="#7e57c2">机票</Tile>
        </div>
        <div className="channel pure-g">
          <Tile to="/hotel" width="2" height="1" bgColor="#f55">今日特惠</Tile>
          <Tile to="/flight" width="2" height="1" bgColor="#1489e6">旅游度假</Tile>
        </div>
        <div className="channel pure-g">
          <Tile to="/hotel" width="2" height="1" bgColor="#ff9800">景点门票</Tile>
          <Tile to="/flight" width="2" height="1" bgColor="#1489e6">团购</Tile>
        </div>
        <div className="channel pure-g">
          <Tile to="/hotel" width="2" height="1" bgColor="#ff9800">用车自驾</Tile>
          <Tile to="/flight" width="2" height="1" bgColor="#009688">攻略</Tile>
        </div>
        <div className="channel pure-g">
          <Tile to="/hotel" width="2" height="1" bgColor="#7eb63d">周末游</Tile>
          <Tile to="/flight" width="2" height="1" bgColor="#009688">惠玩当地</Tile>
        </div>
        <div className="channel pure-g">
          <Tile to="/hotel" width="2" height="1" bgColor="#7eb63d">火车票</Tile>
          <Tile to="/flight" width="1" height="1" bgColor="#1ba9ba">签证</Tile>
          <Tile to="/flight" width="1" height="1" bgColor="#1ba9ba">骆驼书</Tile>
        </div>
        <div className="pure-g bottom-nav">
          <div className="pure-u-1-2 text-center"><Link to="/user">个人中心</Link></div>
          <div className="pure-u-1-2 text-center"><Link to="/recent">最近浏览</Link></div>
        </div>
        <div className="soft text-center">
          <Link to="/soft">精品软件推荐</Link>
        </div>
      </div>

      /* jshint ignore:end */
    );
  }

});

module.exports = HomePage;
