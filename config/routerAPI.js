/**
 * @fileOverview Grunt URL rewrite rule config file
 * @author <a href="mailto:zhi.zhong@qunar.com">Zhongzhi</a>
 * @version	1.0.1
 * @TODO: 解决80端口代理错误
 *
 * Copyright (c) 2015 Qunar.com
 */

module.exports = {
	// 从上至下匹配，遇到第一个匹配的规则后就返回，通用配置写在最下面
	// 特殊配置

	// 通用配置
	'^/api/(.*)': 'require!/app/data/api/$1.js',
};
