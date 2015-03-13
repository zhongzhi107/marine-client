'use strict';

var React = require('react');
var PageActions = require('../../actions/PageActions');
var App = require('../layout/App');
var Navbar = require('../common/Navbar');
var HotelItem = require('../common/HotelItem');
var _ = require('lodash');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

var HotelListPage = React.createClass({

  statics: {
    layout: App,
    meta: {
      title: '<%=city%>酒店_<%=city%>酒店预订_<%=city%>酒店价格查询 - 去哪儿网Qunar.com',
      keywords: '<%=city%>酒店, <%=city%>酒店预订/查询,<%=city%>酒店查询',
      description: '<%=city%>酒店预订和北京酒店查询:您可以通过价格,行政区,商圈,星级等实时查询和比较<%=city%>酒店最新价格及报价! 去哪儿Qunar.com为您提供<%=city%>酒店预定一站式服务!'
    }
  },

  getInitialState() {
    return {
      list: []
    };
  },

  componentWillMount() {
    PageActions.set({
      title: _.template(HotelListPage.meta.title)(this.props)
    });

    if (ExecutionEnvironment.canUseDOM) {
      require('!style!css!less!../../css/hotelList.less');
    } else {
      this.setStateOnServer();
    }
  },

  setStateOnServer() {
    console.log('======set state on server.');
    this.setState({
      hide: 'hide',
      list: [{
        id: 100,
        name: '来自服务端的酒店名称',
        image: 'http://himg.qunarzz.com/imgs/201411/10/GIGWX47ObtXhth68776.jpg',
        star: '三星级酒店',
        address: 'xxxxxxxx',
        price: '350'
      }]
    });
  },

  componentDidMount() {
    var self = this;
    var $ = require('jquery');
    $.getJSON('/api/hotelList', function(result) {
      if (self.isMounted()) {
        self.setState({
          list: result.list
        });
      }
    });
  },

  render() {
    return (
      /* jshint ignore:start */
      <div className="hotel-list">
        <Navbar>{this.props.city}</Navbar>
        <HotelItem hide={this.state.hide} allHotels={this.state.list} />
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = HotelListPage;
