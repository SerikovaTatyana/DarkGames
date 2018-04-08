$(document).ready(function(){

	
	var arr_alf = Array('а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я');
	

	var arr_alf_parent = document.querySelector('.arr_alf_wrap');

	arr_alf.forEach(function(item, i, arr_alf){
		
		var now_but = document.createElement('input');
		now_but.setAttribute('type', 'button');
		now_but.setAttribute('value', item);

		arr_alf_parent.appendChild(now_but);
	});

	var but_alf = $('.arr_alf_wrap input');
	var input_search = $('#search');
	var str = "";

	but_alf.on('click', function(){
		var letter = this.getAttribute('value');
		str += letter;
		input_search.attr('value', str);
		
	});



	// Слайдер 

	var slider_count = 0;
	var but_next = $('#next');
	var but_prev = $('#prev');
	var width = $('.slider-mini').width();


	

	// Кнопки для переключения

	but_next.on('click', function (){

		if(-width < slider_count + (-98)) {
			slider_count -= 98;
		
			
			$('.slider-mini').animate({left: '-=98'}, 500);
		}
		

	});



	but_prev.on('click', function(){

		if(slider_count < 0) {
			slider_count += 98;

			$('.slider-mini').animate({left: '+=98'}, 500);
		}
		


	});



	// Мини картинки переключатели


	var arr_mini = $('.slider-mini img');
	var arr_max = $('.big-img img');

	arr_mini.on('click', function(){

		var src = this.getAttribute('src');

		$('.big-img img').fadeOut(500);
		

		for(var i = 0; i < arr_max.length; i++){

			if(arr_max.eq(i).attr('src') == src) {
				arr_max.eq(i).fadeIn(500);
				// console.log(i);
			}
		}

	});

	
	// Высота дива для слайдера

	var img_height = $('.big-img img').height();
		

	var div_height = $('.big-img').height(img_height + 49);


	$(window).resize(function(){
		var img_height = $('.big-img img').height();
		

		var div_height = $('.big-img').height(img_height + 49);
		// console.log(div_height);
	});


	// Кнопка наверх

	$('#toTop').on('click', function(){

		$("html, body").animate({ scrollTop: 0}, 1000);
	});


	// Второй слайдер 



	var width_wrapp = $('.two-slider-wrapp').width();

	var slider2_prev = $('#slider2-prev');
	var slider2_next = $('#slider2-next');
	var content_img2 = $('.two-slider');
	var content_width = content_img2.width();
	var count_2slider = 0;

	$(window).resize(function(){
		var width_wrapp = $('.two-slider-wrapp').width();
		var content_width = $('.two-slider').width();
	});



	slider2_next.on('click', function(){

		if(count_2slider > (-(content_width))) {
			
			count_2slider -= width_wrapp;

			if(count_2slider > (-(content_width))) {
				
				content_img2.animate({left: '-=' + width_wrapp}, 500);
			} else {
				count_2slider += width_wrapp;
				// content_img2.animate({left: '+=' + width_wrapp}, 500);
			}

			
			
			
		}
		
		console.log();

	});


	slider2_prev.on('click', function(){

		if(count_2slider < 0) {
			count_2slider += width_wrapp;
			content_img2.animate({left: '+=' + width_wrapp}, 500);
		}

	});



	// Меню 

	var butt_menu = $('#main-menu');
	var main_menu = $('.main-menu ul');

	butt_menu.on('click', function(){
		main_menu.slideToggle();
	});


	// Меню user

	var butt_user = $('#butt-user');
	var user_menu = $('.user-menu ul');

	butt_user.on('click', function(){
		user_menu.slideToggle();
	});

});
