function _leftBar() {
	$('#left-bar').hover(function(){
		$('#left-bar').stop().animate({'right':0},500);
	},function(){
		$('#left-bar').stop().animate({'right':-180},500);
	});
}
function _linkHover() {
	$('.text').bind('mouseover',function(){
		$(this).parents('p').addClass('link-hover').siblings().removeClass('link-hover');
	});
}
function _linkSilbe() {
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
}


function _navHover(elLeft) {
	var	elArray = $('.header-wrap nav a'),
		el = $('.header-wrap nav li:nth-child(4)'),
		elLeft,
		secNav = $('.second-nav p'),
		leftIndex = [32,190,345];
		elLeft = elLeft || el[0].offsetLeft;
	elArray.hover(function(){
		var i = $(this).parent('li').index();
		el.stop().animate({'left':leftIndex[i]},300);
		// secNav.eq(i).css('bottom',0);
	},function(){
		el.stop().animate({'left':elLeft},300);
		// secNav.css('bottom',-20);
	});
}
$.fn.extend({
	ani:function(){
		$(this).css({'opacity':'1','z-index':'0'}).siblings().css({'opacity':'0','z-index':'-1'});
		return this;
	}
});
var secNav = ['学习生活','社团协会','科研机构'];
function _roundAnimate() {
	var elLeft,
		value = 0,
		fruit = 0,
		$el = $('#round'),
		localText = ['实用系统','学习社团','校内设施'],
		$sArray = $('.s1 ,.s2 ,.s3 ,.s4 ,.s5 ,.s6 ,.s7 ,.s8'),
		$tArray = $('.t1 ,.t2 ,.t3 ,.t4 ,.t5 ,.t6 ,.t7 ,.t8');
	$('.header-wrap nav a').eq(0).bind('click',function(event){
		value +=360;
		fruit +=360;
		elLeft = 32;
		_navHover(elLeft);
		if (secNav[0] == "学习生活") {
			$('#list-content div:nth-child(1)').ani();
		} else {
			$('#list-content div:nth-child(2)').ani();
		};
		$el.rotate({animateTo:value});
		$("#apple").rotate({animateTo:fruit});
		$('#first-locat').text(localText[0]);
		$('#second-locat').text(secNav[0]);
		$sArray.css({'opacity':'0'});
		$tArray.css({'display':'none'});
		$('.t1').removeClass('t1-hover');
		$('.t2').removeClass('t2-hover');
		setTimeout(function(){$('.s1 ,.s2').css({'opacity':'1'});}, 300);
		setTimeout(function(){$('.t1 ,.t2').css({'display':'block'});}, 100);
		setTimeout(function(){
			$('.t1').addClass('t1-hover');
			$('.t2').addClass('t2-hover');
		}, 600);
		return false;
	});
	$('.header-wrap nav a').eq(1).bind('click',function(event){
		value +=360;
		fruit +=360;
		elLeft = 190;
		_navHover(elLeft);
		if (secNav[1] == "社团协会") {
			$('#list-content div:nth-child(3)').ani();
		} else if(secNav[1] == "校级组织") {
			$('#list-content div:nth-child(4)').ani();
		} else {
			$('#list-content div:nth-child(5)').ani();
		}
		$el.rotate({animateTo:value});
		$("#banana").rotate({animateTo:fruit});
		$('#first-locat').text(localText[1]);
		$('#second-locat').text(secNav[1]);
		$sArray.css({'opacity':'0'});
		$tArray.css({'display':'none'});
		$('.t3').removeClass('t3-hover');
		$('.t4').removeClass('t4-hover');
		$('.t5').removeClass('t5-hover');
		setTimeout(function(){$('.s3 ,.s4 ,.s5').css({'opacity':'1','display':'block'});}, 300);
		setTimeout(function(){$('.t3 ,.t4 ,.t5').css({'display':'block'});}, 100);
		setTimeout(function(){
			$('.t3').addClass('t3-hover');
			$('.t4').addClass('t4-hover');
			$('.t5').addClass('t5-hover');
		}, 600);
		return false;
	});
	$('.header-wrap nav a').eq(2).bind('click',function(event){
		value +=360;
		fruit +=360;
		elLeft = 345;
		_navHover(elLeft);
		if (secNav[2] == "科研机构") {
			$('#list-content div:nth-child(6)').ani();
		} else if(secNav[2] == "党政机构") {
			$('#list-content div:nth-child(7)').ani();
		} else {
			$('#list-content div:nth-child(8)').ani();
		}
		$el.rotate({animateTo:value});
		$("#pear").rotate({animateTo:fruit});
		$('#first-locat').text(localText[2]);
		$('#second-locat').text(secNav[2]);
		$sArray.css({'opacity':'0'});
		$tArray.css({'display':'none'});
		$('.t6').removeClass('t6-hover');
		$('.t7').removeClass('t7-hover');
		$('.t8').removeClass('t8-hover');
		setTimeout(function(){$('.s6 ,.s7 ,.s8').css({'opacity':'1','display':'block'});}, 300);
		setTimeout(function(){$('.t6 ,.t7 ,.t8').css({'display':'block'});}, 100);
		setTimeout(function(){
			$('.t6').addClass('t6-hover');
			$('.t7').addClass('t7-hover');
			$('.t8').addClass('t8-hover');
		}, 600);
		return false;
	});
}
function _secLinkHover(){
	var $tArray = $('.t1 ,.t2 ,.t3 ,.t4 ,.t5 ,.t6 ,.t7 ,.t8');
	$tArray.bind('click',function(){
		$('#second-locat').text($(this).attr('title'));
		var val = $(this).attr('title');
		switch(val) {
			case '学习生活':
				secNav[0] = val;
				$('#list-content div:nth-child(1)').ani();
			break;
			case '资讯平台':
				secNav[0] = val;
				$('#list-content div:nth-child(2)').ani();
			break;
			case '社团协会':
				secNav[1] = val;
				$('#list-content div:nth-child(3)').ani();
			break;
			case '校级组织':
				secNav[1] = val;
				$('#list-content div:nth-child(4)').ani();
			break;
			case '学院团学':
				secNav[1] = val;
				$('#list-content div:nth-child(5)').ani();
			break;
			case '科研机构':
				secNav[2] = val;
				$('#list-content div:nth-child(6)').ani();
			break;
			case '党政机构':
				secNav[2] = val;
				$('#list-content div:nth-child(7)').ani();
			break;
			case '学院官网':
				secNav[2] = val;
				$('#list-content div:nth-child(8)').ani();
			break;
			default:
				secNav[0] = '学习生活';
				secNav[1] = '社团协会';
				secNav[2] = '科研机构';
				$('#list-content div:nth-child(1)').ani();
		}
	});
}
function browers() {
    if(navigator.appName == "Microsoft Internet Explorer") { 
        if(navigator.appVersion.match(/8./i)=='8.'||navigator.appVersion.match(/7./i)=='7.'||navigator.appVersion.match(/6./i)=='6.') { 
        	var warnArray = '<div id="warning">您使用的浏览器版本过低，请升级浏览器再登陆此页面！<span id="close">X</span><a id="button">确认</a></div>';
        	document.body.appendChild(warnArray);
        }
     }
}