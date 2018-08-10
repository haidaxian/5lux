class Slide{
	constructor(el, width, height, data, btnSize, ms, ind, direction){
		this.el = el;
		this.width = width;
		this.height = height;
		this.data = data;
		this.len = data.length;
		this.btnSize = btnSize;	// 按钮大小
		this.ms = ms;	// 间隔毫秒
		this.now = ind;	// 下标
		this.direction = direction;	// 方向
		this.init();
		this.tab();
		this.mag(event);
	}
	init(){
		this.createHtml();
		this.auto();
	}
	mag(event){
		this.el.style.marginLeft=(document.body.clientWidth-this.width)/2+"px"
	}
	createHtml(){
		var that = this;
		// 轮播图的舞台样式
		this.el.style.width = this.width+"px";
		this.el.style.height = this.height+"px";
		this.el.classList.add("Slide");
		// 轮播图结构
		var len = this.len;
		var data = this.data;
		var temp = document.createDocumentFragment();
		// 显示图片
		var ul = document.createElement("ul");
		temp.appendChild(ul);	
		ul.style.width = this.width*(this.len+1)+"px";
		ul.style.height = this.height+"px";
		this.ul = ul;
		for( var i=0; i<len; i++ ){
			var obj = data[i];
			var li = document.createElement("li");
			ul.appendChild(li);
			var a = document.createElement("a");
			li.appendChild(a);
			a.href = obj.url;
			a.target = "_blank";
			a.title = obj.title;
			var img = document.createElement("img");
			a.appendChild(img);
			img.src = obj.img;
			img.style.width = this.width+"px";
			img.style.height = this.height+"px";
			img.style.border = "0px";
		}
		// 克隆
		var li = ul.firstElementChild.cloneNode(true);
		ul.appendChild(li);
		// 显示按钮
		this.spans = [];
		var ol = document.createElement("ol");
		ol.style.left = (document.body.clientWidth / 2) - 90 + "px";
		temp.appendChild(ol);
		for( let i=0; i<len; i++ ){
			var obj = data[i];
			var li = document.createElement("li");
			ol.appendChild(li);
			var span = document.createElement("span");
			li.appendChild(span);
			span.style.width = span.style.height = this.btnSize+"px";
			span.onmouseover = function(){
				that.over();
				that.now = i;
				that.tab();
			}
			this.spans.push(span);
		}
		// 左键头  
		var p1 = document.createElement("p");
		temp.appendChild(p1);
		
		this.p1 = p1;
		p1.onclick = function(){
			that.direction = -1;
			that.now--;
			that.tab();
		}
		// 右键头
		var p2 = document.createElement("p");
		temp.appendChild(p2);
		
		this.p2 = p2;
		p2.onclick = function(){
			that.direction = 1;
			that.now++;
			that.tab();
		}
		// 
		var h = this.btnSize*1.5
		p1.style.top=p2.style.top=(this.height-h)/2+"px";
		p1.style.left="200px";
		p2.style.right="200px";
		// 把虚拟节点添加到真实dom中
		this.el.appendChild(temp);
	}
	
	tab(){
		var that = this;
		var len = this.len;
		if( this.now == len ){
			startMove(this.ul, {left:-this.width*this.now}, function(){
				that.ul.style.left = "0px";
			});
			this.now = 0;
		}else if( this.now == -1 ){// 从第一张图片向最后一张图片切换
			// 先瞬间定位到克隆的那张图片上
			this.ul.style.left = -this.width*this.len+"px";
			this.now = this.len-1;
			startMove(this.ul, {left:-this.width*this.now});
		}else{
			startMove(this.ul, {left:-this.width*this.now});
		}
		// 按钮样式
		var spans = this.spans;
		for( var i=0; i<len; i++ ){
			spans[i].className = "";
		}
		spans[this.now].className = "selected";
	}
	
	next(){
		this.now+=this.direction;
		this.tab();
	}	
	auto(){
		this.out();		
		this.el.onmouseover = this.over.bind(this);
		this.el.onmouseout = this.out.bind(this);
	}	
	over(){
		// 停止定时器
		clearInterval(this.timer);
		// 显示左右按钮
		startMove(this.p1, {opacity:100});
		startMove(this.p2, {opacity:100});
	}
	out(){
		this.timer = setInterval(this.next.bind(this), this.ms);
		// 隐藏左右按钮
		
	}
}

