
'use strict';

var React = require('react/addons');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var PageActions = require('../../actions/PageActions');
var App = require('../layout/App');
var Navbar = require('../common/Navbar');

var AboutPage = React.createClass({

  statics: {
      layout: App,

      // for SEO
      meta: {
        title: '公司简介 - 去哪儿网Qunar.com',
        keywords: '去哪儿网公司简介, 关于去哪儿网, 去哪儿网简介',
        description: '去哪儿网（Qunar.com）是全球最大的中文旅行平台，其网站上线于2005年5月，公司总部位于北京。去哪儿网通过网站及移动客户端的全平台覆盖，随时随地为旅行者提供国内外机票、酒店、度假、旅游团购、及旅行信息的深度搜索。'
      }
  },

  componentWillMount() {

    if (ExecutionEnvironment.canUseDOM) {
      require('!style!css!../../css/about.css');
      require('!style!css!less!../../css/a.less');
    }

    PageActions.set({title: AboutPage.meta.title});
  },

  render() {
    return (
      /* jshint ignore:start */
        <div className="about">
          <Navbar>关于我们</Navbar>
          <p>去哪儿网（Qunar.com）是全球最大的中文旅行网站，网站上线于2005年5月，公司总部位于北京。去哪儿网通过网站及移动客户端的全平台覆盖，随时随地为旅行者提供国内外机票、酒店、度假、旅游团购、及旅行信息的深度搜索，帮助旅行者找到性价比最高的产品和最优质的信息，聪明地安排旅行。去哪儿网凭借其便捷、先进的智能搜索技术对互联网上的旅行信息进行整合，为用户提供实时、可靠、全面的旅游产品查询和信息比较服务。</p>
          <p>根据2011年12月艾瑞监测数据，在旅行类网站月度访问次数统计中，去哪儿网以超过7460万人次高居榜首。截至2012年6月底，去哪儿网实时搜索超过400家机票和酒店代理商网站，搜索范围覆盖全球范围内超过140,000家酒店、57,000条机票航线、180,000条度假线路、超过8,500个旅游景点、1亿份游记攻略，并且每日提供逾1860种旅游团购产品。去哪儿网移动客户端是中国旅行类最受欢迎的移动应用，其拥有超过1180万用户的激活量，并在苹果中国App Store公布的“2011 年最佳产品”(App Store Rewind 2011)中荣膺中国原创旅行类应用之冠。</p>
        </div>

      /* jshint ignore:end */
    );
  }

});

module.exports = AboutPage;
