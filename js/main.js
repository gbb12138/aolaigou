$(function(){
	//banner图
	$(".banner_pic li").eq(0).css("opacity",1);
	var bannerIndex=0;
	$(".banner_next").click(function(){
		bannerIndex++;
		bannerMove();
	})
	$(".main_banner_bg").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
			$(".banner_next").click();
		},3000);
	})
	$(".banner_pre").click(function(){
		bannerIndex--;
		bannerMove();
	})
	$(".banner_btn li").mouseover(function(){
		bannerIndex=$(this).index();
		bannerMove();
	})
	var timer=setInterval(function(){
		$(".banner_next").click();
	},3000);
	
	function bannerMove(){
		if(bannerIndex==$(".banner_pic li").length){
			bannerIndex=0;
		}
		if(bannerIndex<0){
			bannerIndex=$(".banner_pic li").length-1;
		}
		var color=$(".banner_pic li").eq(bannerIndex).attr("data-color");
		$(".main_banner_bg").css("background",color);
		$(".banner_pic li").eq(bannerIndex).show().stop().animate({"opacity":"1"},500)
		.siblings().hide().css({"opacity":"0"});
		$(".banner_btn li").eq(bannerIndex).addClass("banner_hot").siblings().removeClass();
	}
    //今日特价切换
	var Tnum=0;
	$(".tejia_pre,.tejia_next").click(function(){
		tejia();
	})
	//手风琴
	$(".shoufengqin li").mouseover(function(){
		$(this).addClass("shou_active").stop(true,true).animate({"width":"398px"},250).css("overflow","hidden")
		.siblings().removeClass("shou_active").stop(true,true).animate({"width":"200px"},250);
	});
	//图片移动
	$(".hover").hover(function(){
		$(this).find("img").stop().animate({"marginLeft":"5px"},250);
	},function(){
		$(this).find("img").stop().animate({"marginLeft":"0px"},250);
	})
	//Tab切换
	$(".shechipin_item").mouseover(function(){
		$(this).addClass("shechipin_current").siblings().removeClass("shechipin_current");
		var index=$(this).index();
		$(".shechipin_con").eq(index).show().siblings().hide();
	})
	$(".huasheng_item").mouseover(function(){
		$(this).addClass("huasheng_current").siblings().removeClass("huasheng_current");
		var index=$(this).index();
		$(".huasheng_right_con1").eq(index).show().siblings().hide();
	})
	//华盛品牌切换
	$(".huasheng_pre,.huasheng_next").click(function(){
		$(".huasheng_brand1").eq(0).toggle().siblings(".huasheng_brand1").toggle();
		
	});
	//小轮播图
	var lunbo1=0;
	var timer1=setInterval(function(){
		move();
	},1000);
	$(".huasheng_lunbo").mouseover(function(){
		clearInterval(timer1);
	})
	$(".huasheng_lunbo").mouseout(function(){
		timer1=setInterval(function(){
			move();
		},4000);
	})
	$(".hua_lun_btn li").mouseover(function(){
		lunbo1=$(this).index()-1;
		move();
	})
	function move(){
			lunbo1++;
			if(lunbo1==4){
				lunbo1=0;
			}
			$(".hua_lun_pic li").eq(lunbo1).show().siblings().hide();
			$(".hua_lun_btn li").eq(lunbo1).addClass("hot").siblings().removeClass("hot");
	}
	function tejia(){
		Tnum++;
      if(Tnum%2==1){
      	$(".main_tejia_current").hide();
      	$(".main_tejia2").show();
      }else{
      	$(".main_tejia_current").show();
      	$(".main_tejia2").hide();
      }
	}
})
