/**
 * ==UserScript==
 * @name       GDUT Navigation
 * @github     https://github.com/Geek-Lee/gdut.navigation.git
 * @version    0.1.0
 * @description  Summary GDUT Navigation
 * @copyright    2012-2013, Vtmer
 * @require http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min.js
 * @require https://jqueryrotate.googlecode.com/files/jQueryRotate.js
 * ==/UserScript==
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 ** DataURL 是一个用于数据加载、DOM操作的原型
 *
 *  data 属性指向传入的数据，数据应为 JSON 格式
 *
 *  sHTML 属性是一个对象，存放 html 模板，接受一个对象参数，可以扩展
 *
 *  getData 方法接受三个参数，分别为 Jq 对象(object)，数据类型(string)，模板类型(string)
 *      作用是按需将数据加载到对应的模板上存放到数组 htm 里面，并返回 数组htm
 *
 *  setDom 方法接收两个参数，分别为 Jq 对象(object)，数组
 *      作用是将 getData 返回的数组插到页面中
 *
 ** oNav 是实现菜单效果的原型
 *
 *	原型接收5个参数，4个Jq对象(object)、一个数值；firstNav,secondNav,sTitle,ss,tp，angle
 *      分别存放二级菜单项，插图动画块，二级菜单组，插图动画块集合，二级菜单项移动像素值，
 *      对应插图动画块转动角度
 *  
 *  sPicAni 方法接收属性 angle，实现插图动画块的旋转动画
 *
 *  sTitleUp 方法实现二级菜单项上升的动画效果，作用于 eBind
 *
 *  sTitleDown 方法实现二级菜单项下降的动画效果，作用于 eBind
 *
 *	sTitleUD 方法实现二级菜单项上升下降的动画效果，作用于 eBind
 *
 *  eBind 方法为二级菜单项绑定事件触发动画效果
 ** 
 */
function DataURL(data){
	this.data = data;
	this.sHTML = {
		typeOne:function(ops){
			return '<p><span><a href='+ops.hr+' title='
					+ops.disc+' class="text">'+ops.name+'</a></span></p>';
		},
		typeTwo:function(ops){
			return '<p><span><a href='+ops.hr+' title='
					+ops.disc+' class="text" data-spec=true>'+ops.name+'</a></span></p>';
		}
	};
}
DataURL.prototype.getData = function( $Elem, sDataType, htmType){
	var DataType = this.data[$Elem.attr(sDataType)],
		htmType = htmType || 'typeOne',
		htm = "";
	for (var i = 0, len = DataType.length; i < len; i++) {
		htm += this.sHTML[htmType](DataType[i]);
	}
	return htm;
};
DataURL.prototype.setDom = function( $Elem, sHtml){
	$Elem.html(sHtml);
};


function oNav($elem1,$elem2,$elem3,$elem4,tp) {
	this.firstNav = $elem1;
	this.secondNav = $elem2;
	this.sTitle = $elem3;
	this.ss = $elem4;
	this.angle = 0;
	this.tp = tp;
}
oNav.prototype = {
	sPicAni: function(angle) {
		this.ss.css({'opacity':0});
		this.secondNav.css({'opacity':1}).rotate({animateTo:angle});
	},
	sTitleUp: function(){
		var that = this;
		that.sTitle.each(function(){
			var $this = $(this);
			setTimeout(function(){$this.addClass('viewOn')
				.css({'top': parseInt($this.css('top')) - that.tp,'opacity':1});
			},300);
		});
	},
	sTitleDown: function(){
		var that = this;
		that.sTitle.each(function(){
			$(this).removeClass('viewOn')
				.css({'top': parseInt($(this).css('top')) + that.tp,'opacity':0});
		});
	},
	sTitleUD: function(){
		var that = this;
		that.sTitle.each(function(){
			if (!$(this).is('animated')){
				$(this).css({'top': parseInt($(this).css('top')) + that.tp,'opacity':0});
				var $this = $(this);
				setTimeout(function(){	
					$this.css({'top': parseInt($this.css('top')) - that.tp,'opacity':1});
				}, 600);
			}
		});
	},
	eBind: function() {
		var that = this;
		that.firstNav.bind('click',function(){
			var $this = $(this);
			that.angle += 360;
			that.sPicAni(that.angle);
			if($this.hasClass('choosed')){ // 通过 choosed 类来区分不同的动画效果
				that.sTitleUD();
			} else {
				$('.choosed').removeClass('choosed');
				$this.addClass('choosed');	
				$('.viewOn').each(function(){
					$(this).removeClass('viewOn')
						.css({'top': parseInt($(this).css('top')) 
							+ that.tp,'opacity':0});
				});
				that.sTitleUp();
			}
			event.preventDefault();
		});
	}
};
