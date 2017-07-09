
//alert();
function startMove(obj,json,fn) {		//运动函数
	clearInterval(obj.timer);
	//alert();
	
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json) {
			//alert();
			var myStyle = 0;
			if(attr == 'opacity') {
				myStyle = Math.round(parseFloat(getStyle(obj,attr))*100);
			}else {
				myStyle = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr]-myStyle)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(myStyle != json[attr]) {
				flag = false;
				if(attr == 'opacity') {
					myStyle += speed;
					obj.style.filter = 'alpha(opacity='+myStyle+')';
					obj.style[attr] = myStyle/100;
				}else {
					obj.style[attr] = myStyle+speed+'px';
				}
			}
			if(flag) {
			clearInterval(obj.timer);
			if(fn) {
				fn();
			}
		}
		}
		
	},30);
}
function getStyle(obj,attr) {           //识别浏览器，解决浏览器兼容问题
	if(obj.currentStyle) {
		return obj.currentStyle(attr);
	}else {
		return getComputedStyle(obj,false)[attr];
	}
}
