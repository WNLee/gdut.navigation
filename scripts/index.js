/**
 *
 * index.js
 *
 * util 是全局变量，用在命名空间
 *
 * rightBar() 是常用标签的动态效果的实现方法
 *
 * linkHover(),linkSible() 是导航链接 hover 效果的实现方法
 *
 * navHover() 是页面导航的 hover 效果的实现方法
 *
 * navClick() 是页面一二级导航点击事件触发的动态效果的实现方法
 *
 * dataInit() 是数据初始化的方法
 *
 * isBrowser() 是浏览器型号和版本的判断方法
 *
 * init() 是页面初始化方法
 *
 */

var util = {};
util.rightBar = function(){
	// .hover() 使鼠标移到 right-bar 弹开，移出  right-bar 收回
	$('#right-bar').hover(function(){
		$('#right-bar')
		.stop()
		.animate({'right':0},500);
	},function(){
		$('#right-bar')
		.stop()
		.animate({'right':-180},500);
	});
};
util.linkHover = function() {
	$('.text').live('mouseover',function(){
		$(this).parents('p')
			.addClass('link-hover')
		.siblings()
			.removeClass('link-hover');
	});
};
util.linkSible = function() {
	$('.text').hover(function(){
		var $this = $(this),
			offWidth = $this.width(), // 获取链接的宽度
			data = $this.attr('data-spec') ? 84 : 140; // 区分链接容量的两种宽度
		if(offWidth > data) {
			$(this)
			.stop()
			.animate({'left': data - offWidth},1000);
		}
	},function(){
		var $this = $(this),
			offWidth = $this.width(),
			data = $this.attr('data-spec') ? 84 : 140;
		if(offWidth > data) {
			$(this)
			.stop()
			.animate({'left': 0},1000);
		}
	});
};
util.navHover = function(ind){
	var	elArray = $('.header-wrap nav a'),
		el = $('.header-wrap nav li:nth-child(4)'),
		secNav = $('.second-nav p'),
		leftIndex = [32,190,345], // 存放 hover 元素的三次位移的位置
		elLeft; // 存放初始化或者点击一级菜单时 hover 元素的位置
	elLeft = leftIndex[ind] || 32;
	elArray.hover(function(){
		var i = $(this).parent('li').index();
		el.stop().animate({'left':leftIndex[i]},300);
	},function(){
		el.stop().animate({'left':elLeft},300);
	});
};
util.navClick = function(){
	var $nav = $('.first-nav ul li a'),
		$aniElem = $('#apple ,#banana ,#pear'),
		$tAry = $('.t1 ,.t2 ,.t3 ,.t4 ,.t5 ,.t6 ,.t7 ,.t8'),
		$tArray = [$('.t1 ,.t2'),$('.t3 ,.t4 ,.t5'),$('.t6 ,.t7 ,.t8')],
		val = 0, // 页面地球转动角度的计数器
		navData = new DataURL(oNavURL), // 实例化 DataURL 对象
		$el = $('#list-content'); // 链接容器
	var objNav = [{
			"title":"实用系统",
			"nav":["学习生活","资讯平台"]
		}, {
			"title":"学习社团",
			"nav":["社团协会","校级组织","学院团学"]
		}, {
			"title":"校内设施",
			"nav":["科研机构","党政机构","学院官网"]
		}]; // 用对象、数组互相嵌套来模拟 一、二级导航的关系

	$nav.live('click', function(){
		var ind = $(this).parent('li').index(),
			da = navData.getData($('.viewChoose').eq(ind),'data-type','typeOne'); // 加载 url
		$('#round').rotate({animateTo:val+=360});
		$('#first-locat').text(objNav[ind].title); // 修改面包屑一级位置
		$('#second-locat').text($('.viewChoose').eq(ind).attr('title')); // 修改面包屑二级位置
		navData.setDom($el, da); // dom 操作
		util.navHover($(this).parent('li').index()); // 点击后改变 导航 hover 元素的起始位置
		return false;
	});
	$tAry.live('click', function(){
		var da = navData.getData($(this).eq(0),'data-type','typeOne'); // 加载 url
		$('#second-locat').text($(this).attr('title')); // 修改面包屑二级位置
		$el.empty(); // 清空链接容器
		navData.setDom($el,da); // dom 操作
	});
	var oN = []; // 存放实例化的 oNav 对象
	for(var i = 0, len = $aniElem.length; i < len; i++) {
		oN[i] = new oNav($nav.eq(i), $aniElem.eq(i), $tArray[i], $aniElem, 40); // 一级菜单每项实例化一个对象
		oN[i].eBind(); // 调用 eBind 方法，eBind作用见 model.js 文件
	} 
};
util.dataInit = function() {
	var navData = new DataURL(oNavURL),
		$tArray = $('.t1 ,.t2 ,.t3 ,.t4 ,.t5 ,.t6 ,.t7 ,.t8'),
		$lArray = $('#list-content');
	var da = navData.getData($tArray.eq(0),'data-type','typeOne');
	navData.setDom($lArray.eq(0),da);	
	navData.setDom($('#right-bar-link'),navData.getData($('#right-bar-link'),'data-type','typeTwo'));
};
util.isBrowser = function() {
	var Sys = {},
            ua = navigator.userAgent.toLowerCase(),
            s,
            version;

        if ((s = ua.match(/msie ([\d.]+)/))) {
            Sys.ie = s[1];
        } else if ((s = ua.match(/firefox\/([\d.]+)/))) {
            Sys.firefox = s[1];
        } else if ((s = ua.match(/chrome\/([\d.]+)/))) {
            Sys.chrome = s[1];
        }

	if (Sys.ie) {
		if(navigator.userAgent.indexOf("MSIE 6.0")>0 ||
                   navigator.userAgent.indexOf("MSIE 8.0")>0) {
			alert("你的浏览器版本太低，请升级你的浏览器");
			return ;
		}
	} 
	if (Sys.firefox) {
		version = navigator.appVersion.substring(
                            navigator.appVersion.indexOf(":"),
                            navigator.appVersion.indexOf(".")
                          );
		if (parseInt(version, 10) < 4) {
			alert("你的浏览器版本太低，请升级你的浏览器");
			return ;
		}
	}
	if (Sys.chrome) {
		version = navigator.appVersion.substring(
                            navigator.appVersion.indexOf(":"),
                            navigator.appVersion.indexOf(".")
                          );
		if (parseInt(version, 10) < 4) {
			alert("你的浏览器版本太低，请升级你的浏览器");
			return ;
		}
	}
};
util.init = function() {
	// 加载各方法
	util.dataInit();
	util.rightBar();
	util.navHover();
	util.navClick();
	util.linkHover();
	util.linkSible();
	// util.isBrowser();
};
(function(){
	$(function(){
		util.init();
	});
})(jQuery);
