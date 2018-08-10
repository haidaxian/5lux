//function index_style() {
//轮播图
new Slide(index_banner, 1440, 520, [
	{ "title": "", "img": "../src/img/index/banner1.jpg", "url": "" },
	{ "title": "", "img": "../src/img/index/banner2.jpg", "url": "" },
	{ "title": "", "img": "../src/img/index/banner3.jpg", "url": "" },
	{ "title": "", "img": "../src/img/index/banner4.jpg", "url": "" },
	{ "title": "", "img": "../src/img/index/banner5.jpg", "url": "" }
], 10, 3000, 1, 1);
//轮播图下边那个
$(".FlagshipBrand_list>li").mouseenter(function() {
	$(this).find(".Brand_hide").stop().animate({ "top": "0" }, 250);
}).mouseleave(function() {
	$(this).find(".Brand_hide").stop().animate({ "top": "100px" }, 250);
})

$(".HotStore_flag").mouseenter(function() {
	$(this).find(".hot_hid").stop().animate({ "opacity": "1" }, 150);
	$(this).find(".hot_topline").stop().animate({ "width": "166px" }, 300);
	$(this).find(".hot_bottomline").stop().animate({ "width": "166px" }, 300);
	$(this).find(".hot_rightline").stop().animate({ "height": "84px" }, 300);
	$(this).find(".hot_leftline").stop().animate({ "height": "84px" }, 300);
}).mouseleave(function() {
	$(this).find(".hot_hid").stop().animate({ "opacity": "0" }, 150);
	$(this).find(".hot_topline").stop().animate({ "width": "0" }, 300);
	$(this).find(".hot_bottomline").stop().animate({ "width": "0" }, 300);
	$(this).find(".hot_rightline").stop().animate({ "height": "0" }, 300);
	$(this).find(".hot_leftline").stop().animate({ "height": "0" }, 300);
})
var $HotStoreleft = 0;
$(".HotStore_h_bt").children(":eq(1)").click(function() {
	if($HotStoreleft == -2420) {
		$HotStoreleft = -2420;
	} else {
		$HotStoreleft += (-1210);
	}
	$(".HotStore_logo_box").stop().animate({ "left": $HotStoreleft + "px" }, 200);
})
$(".HotStore_h_bt").children(":eq(0)").click(function() {
	if($HotStoreleft == 0) {
		$HotStoreleft = 0;
	} else {
		$HotStoreleft -= (-1210);
	}
	$(".HotStore_logo_box").stop().animate({ "left": $HotStoreleft + "px" }, 200);
})

$(".over_list_li").mouseenter(function() {
	$(this).find(".over_list_G").stop().animate({ "left": "402px" }, 400);
}).mouseleave(function() {
	$(this).find(".over_list_G").stop().css("left", "-402px");
})

$(".hot_items_list").children().mouseenter(function() {
	$(this).find(".hot_items_top").stop().animate({ "left": "-20px" }, 300);
	$(this).find(".hot_items_bottom").stop().animate({ "left": "20px" }, 300);
	$(this).find(".hot_items_top2").stop().animate({ "left": "-20px" }, 300);
	$(this).find(".hot_items_bottom2").stop().animate({ "left": "20px" }, 300);
}).mouseleave(function() {
	$(this).find(".hot_items_top").stop().animate({ "left": "0" }, 300);
	$(this).find(".hot_items_bottom").stop().animate({ "left": "0" }, 300);
	$(this).find(".hot_items_top2").stop().animate({ "left": "0" }, 300);
	$(this).find(".hot_items_bottom2").stop().animate({ "left": "0" }, 300);
})

$(".hot_items_tab").children(":eq(0)").mouseenter(function() {
	$(".hot_items_tab").children().css("background", "#999")
	$(this).css("background", "#000")
	$(".hot_items_befor").stop().animate({ "left": "0" }, 100);
})
$(".hot_items_tab").children(":eq(1)").mouseenter(function() {
	$(".hot_items_tab").children().css("background", "#999")
	$(this).css("background", "#000")
	$(".hot_items_befor").stop().animate({ "left": "-1210px" }, 100);
})
$(".hot_items_tab").children(":eq(2)").mouseenter(function() {
	$(".hot_items_tab").children().css("background", "#999")
	$(this).css("background", "#000")
	$(".hot_items_befor").stop().animate({ "left": "-2420px" }, 100);
})

$(".hot_list_left,.hot_list_mid_top,.hot_list_mid_bottom").mouseenter(function() {
	$(this).children(".hot_list_TM").css({ "transform": "scale(1,1)", "opacity": "1" });
}).mouseleave(function() {
	$(this).children(".hot_list_TM").css({ "transform": "scale(0,1)", "opacity": "0" });
})

$(".shopCenter_3d").children("li").mouseenter(function() {
	$(this).find(".shopCenter_item").css({ "transform": "rotateX(90deg)" });
}).mouseleave(function() {
	$(this).find(".shopCenter_item").css({ "transform": "rotateX(0deg)" });
})

function ShopCenterBanner(elem) {
	elem.children(":eq(1)").children("i").mouseenter(function() {
		$(this).css("background", "#c77f40");
		$(this).click(function() {
			var ind = $(this).index();
			$Classicbagsleft = (-220 * ind);
			$(this).css("background", "#c77f40")
			$(this).parent().parent().prev().stop().animate({ "left": $Classicbagsleft + "px" }, 200);
		})
	}).mouseleave(function() {
		$(this).css("background", "#666");
	})
	var $Classicbagsleft = 0;
	elem.children(":eq(2)").click(function() {
		if($Classicbagsleft == -440) {
			$Classicbagsleft = -440;
		} else {
			$Classicbagsleft += (-220);
		}
		$(this).parent().prev().stop().animate({ "left": $Classicbagsleft + "px" }, 200);
	})
	elem.children(":eq(0)").click(function() {
		if($Classicbagsleft == 0) {
			$Classicbagsleft = 0;
		} else {
			$Classicbagsleft -= (-220);
		}
		$(this).parent().prev().stop().animate({ "left": $Classicbagsleft + "px" }, 200);
	})
}
ShopCenterBanner($(".LB1"));
ShopCenterBanner($(".LB2"));
ShopCenterBanner($(".LB3"));
ShopCenterBanner($(".LB4"));
ShopCenterBanner($(".LB5"));
$(".luxHistory_pic>li").mouseenter(function() {
	var ind=$(this).index()+1;
	$(".luxHistory_bigpic").find("img").attr("src","../src/img/index/"+ind+"bank.jpg");
	$(this).find(".His_topline").stop().animate({ "width": "194px" }, 300);
	$(this).find(".His_bottomline").stop().animate({ "width": "194px" }, 300);
	$(this).find(".His_rightline").stop().animate({ "height": "65px" }, 300);
	$(this).find(".His_leftline").stop().animate({ "height": "65px" }, 300);
}).mouseleave(function() {
	$(this).find(".His_topline").stop().animate({ "width": "0" }, 300);
	$(this).find(".His_bottomline").stop().animate({ "width": "0" }, 300);
	$(this).find(".His_rightline").stop().animate({ "height": "0" }, 300);
	$(this).find(".His_leftline").stop().animate({ "height": "0" }, 300);
})

//////////////////////////////////////////////////////////////////////////////////////////////////
//}
//module.exports.index_style = index_style(); // 输出模块