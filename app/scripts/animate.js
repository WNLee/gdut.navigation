function anim() {}
$(function(){
	function DataURL(data){
		this.data = data;
		this.sHTML = {
			typeOne:function(ops){
				return '<p><span><a href='+ops.hr+' title='+ops.disc+' class="text">'+ops.name+'</a></span></p>';
			}
		};
	}
	DataURL.prototype.getData = function( $Elem, sDataType){
		var DataType = this.data[$Elem.attr(sDataType)],
			htm = "";
		for (var i = 0, len = DataType.length; i < len; i++) {
			htm += this.sHTML.typeOne(DataType[i]);
		}
		return htm;

	};
	DataURL.prototype.setDom = function( $Elem, sHtml){
		$Elem.html(sHtml);
	};
	var navData = new DataURL(oNavURL),
		$tArray = $('.t1 ,.t2 ,.t3 ,.t4 ,.t5 ,.t6 ,.t7 ,.t8'),
		$sArray = $('.s1 ,.s2 ,.s3 ,.s4 ,.s5 ,.s6 ,.s7 ,.s8'),
		$lArray = $('.list-00 ,.list-01 ,.list-10 ,.list-11 ,.list-12 ,.list-20 ,.list-21 ,.list-22');
	for (var i = 0, len = $tArray.length; i < len; i++) {
		var da = navData.getData($tArray.eq(i),'data-type');
		navData.setDom($lArray.eq(i),da);	
	}
});