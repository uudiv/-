$(function(){
	$('.box3_l .global_list .top li').on('mouseenter',function(){
		$(this).addClass('now').siblings().removeClass('now')
		$(this).parent().next('a').attr('href',$(this).children().attr('href'))
		$('.box3_l .global_list .bottom').children('ul').eq($(this).index()).fadeIn().siblings().fadeOut()		
	})
	$('.box1_l .global_list .top li').on('mouseenter',function(){
		$(this).addClass('now').siblings().removeClass('now')
		$(this).parent().next('a').attr('href',$(this).children().attr('href'))
		$('.box1_l .global_list .bottom').children('ul').eq($(this).index()).fadeIn().siblings().fadeOut()		
	})
})