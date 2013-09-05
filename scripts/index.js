

var util = {};
util.leftBar = function(){
	$('#left-bar').hover(function(){
		$('#left-bar').stop().animate({'right':0},500);
	},function(){
		$('#left-bar').stop().animate({'right':-180},500);
	});
};
util.linkHover = function() {
	$('.text').bind('mouseover',function(){
		$(this).parents('p').addClass('link-hover').siblings().removeClass('link-hover');
	});
};
util.linkSible = function() {
	$('.text').hover(function(){
		var offWidth = $(this).width();
		if(offWidth > 140) {
			$(this).stop().animate({'left': 140 - offWidth},1000);
		}
	},function(){
		var offWidth = $(this).width();
		if(offWidth > 140) {
			$(this).stop().animate({'left': 0},1000);
		}
	});
};
util.navHover = function(){
	var	elArray = $('.header-wrap nav a'),
	el = $('.header-wrap nav li:nth-child(4)'),
	elLeft,
	secNav = $('.second-nav p'),
	leftIndex = [32,190,345];
	elLeft = elLeft || el[0].offsetLeft;
	elArray.hover(function(){
		var i = $(this).parent('li').index();
		el.stop().animate({'left':leftIndex[i]},300);
	},function(){
		el.stop().animate({'left':elLeft},300);
	});
};
util.animate = anim;
util.init = function() {
	util.leftBar();
	util.linkHover();
	util.linkSible();
	util.navHover();
	util.animate();
};
(function(){
	$(function(){
		util.init();
	});
})(jQuery);