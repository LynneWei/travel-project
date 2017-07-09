function startMove(obj,json,fn) {
						clearInterval(obj.timer);
						var flag = true;
						obj.timer = setInterval(function(){
							for(var attr in json) {
								var oStyle = 0;
								if(attr=='opacity') {
									oStyle = Math.round(parseFloat(getStyle(obj,attr))*100);
								}else {
									oStyle = parseInt(getStyle(obj,attr));
								}
								var speed = (json[attr]-oStyle)/10;
								speed = speed>0?Math.ceil(speed):Math.floor(speed);
								if(oStyle != json[attr]) {
									flag = false;
									if(attr=='opacity') {
										oStyle += speed;
										obj.style.filter = 'alpha(opacity='+(oStyle)+')';
										obj.style[attr] = oStyle/100;
									}else {
										obj.style[attr] = oStyle+speed+'px';
									}
								}
						}
						if(flag) {
							clearInterval(obj.timer);
							if(fn) {
								fn();
							}
						}
					},30);

					}
					function getStyle(obj,attr) {
					if(obj.currentStyle) {
						return obj.currentStyle(attr);
					}else {
						return getComputedStyle(obj,false)[attr];
					}
				}