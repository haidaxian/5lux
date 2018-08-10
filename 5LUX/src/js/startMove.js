var startMove = (elem, json, cb)=>{	
	// 每次开启运动时，先把上一个定时器关闭掉
	clearInterval(elem.timer);
	elem.timer = setInterval(()=>{
		var flag = true; // 假设所有属性，都达到了目标值
		for( var attr in json ){	
			// 获取目标值（终点）
			var target = json[attr];
			// 获取当前值（每一次运行时的起点）
			var v = getComputedStyle(elem)[attr];
			if(attr == "opacity"){  // 0-1    target=100时，完全显示；target=0时透明；
				v = Math.round(v*100);
			}else{
				v = parseInt(v);
			}
			//console.log(v);
			// 求这一次运行时的步长：差值/2
			var step = (target-v)/6;
			if( step<0 ){
				step = Math.floor(step);
			}else{
				step = Math.ceil(step);
			}
			//console.log(step);
			// 更新
			if(attr == "opacity"){
				elem.style[attr] = (v+step)/100;
			}else{
				elem.style[attr] = v+step+"px";
			}
			// 判断是否更新到了目标值
			if( v != target ){
				// 众多的属性中，至少有1个属性没有到达目标值
				flag = false;
			}
		}
		// 判断是否所有属性均到了目标值
		if( flag ){
			clearInterval(elem.timer);
			// 回调函数
			if( cb ){
				cb();
			}
		}
	}, 30);	
}