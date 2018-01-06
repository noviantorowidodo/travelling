// event pada saat link di klik
$ ('.page-scroll').on('click', function(e){


	// ambil isi href
	var tujuan = $(this).attr('href');
	
	//tangkap element ybs
	var elemenTujuan = $(tujuan);
	
	

	//pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1200, 'easeInOutExpo');

	e.preventDefault();
 

});

//promo
$(window).on('load',function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

	//jumbotron
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//gambar galeri
	if( wScroll > $('.galeri').offset().top - 180 ) {
		$('.galeri .thumbnail').each(function(i) {
			setTimeout(function() {
		    	$('.galeri .thumbnail').eq(i).addClass('muncul');
			}, 340 * (i+1));
		});
		
	}
});