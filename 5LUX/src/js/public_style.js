function public_style() {

	$(".Htop_right").children(":eq(2)").mouseenter(function() {
		$(".my5lux").stop().slideDown();
		$(".Htop_right_li3>i").css("background-position", "-310px -417px");
		this.style.background = "#fff";
	}).mouseleave(function() {
		$(".my5lux").stop().slideUp();
		this.style.background = "";
		$(".Htop_right_li3>i").css("background-position", "-310px -383px");
	})
	$(".Htop_right").children(":eq(4)").mouseenter(function() {
		$(".Htop_right_qr").stop().slideDown();
		$(".Htop_right_li5>i").css("background-position", "-310px -417px");
		$(".Htop_right_li5>b").css("background-position", "-288px -413px");
		this.style.background = "#fff";
	}).mouseleave(function() {
		$(".Htop_right_qr").stop().slideUp();
		this.style.background = "";
		$(".Htop_right_li5>i").css("background-position", "-310px -383px");
		$(".Htop_right_li5>b").css("background-position", "-288px -378px");
	})
	$(".Hbott>ul").children(":eq(10)").mouseenter(function() {
		$(".Hbott_li11>i").css("background-position", "-366px -259px");
		this.style.color = "#fff";
	}).mouseleave(function() {
		this.style.color = "";
		$(".Hbott_li11>i").css("background-position", "-58px -176px");
	})

	$(".Hbott_first_ul>li").mouseenter(function() {
		//var ind = $(this).index();
		this.style.background = "#fff";
		this.style.paddingLeft = "51px";
		this.style.width = "79px";
		$(this).children(".Hbott_first_ul_Recommend").stop().show();
		$(this).children("em").css("display", "block");
		$(this).children("b").css("display", "block");
		$(this).children("i").css("display", "none");

	}).mouseleave(function() {
		this.style.background = "";
		this.style.paddingLeft = "45px";
		this.style.width = "85px";
		$(this).children(".Hbott_first_ul_Recommend").stop().hide()
		$(this).children("em").css("display", "none");
		$(this).children("b").css("display", "none");
		$(this).children("i").css("display", "block");
	})

	$(".Hbott_first_ul>li>a").mouseenter(function() {
		this.style.color = "#c88a46";
	}).mouseleave(function() {
		this.style.color = "#000";
	})

	$(".Hbott_first").mouseenter(function() {
		$(this).children(".Hbott_first_ul").stop().slideDown();
	}).mouseleave(function() {
		$(this).children(".Hbott_first_ul").stop().slideUp();
	})

}
module.exports.public_style = public_style(); // 输出模块