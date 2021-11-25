<? include_once $_SERVER['DOCUMENT_ROOT']."/common/html/head.html"; ?>
<? include_once $_SERVER['DOCUMENT_ROOT']."/common/html/header.html"; ?>

<section id="container">
	<? include_once "./about_v.php"; ?>
	<h1 class="pt130 sub_tit40 center roboto"><b>INTERIOR</b></h1>
	<article class="pt130 pb130 interior_con">
		<div class="inner1200">
			<div class="interior_roll">
				<div class="interior_img"><img src="img/interior_img1.jpg" alt="서울홍치과 인테리어 사진"/></div>
				<div class="interior_img"><img src="img/interior_img2.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img3.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img4.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img5.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img6.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img7.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img8.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img9.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img10.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img11.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img12.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img13.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img14.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img15.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img16.jpg" alt="서울홍치과 인테리어 사진" /></div>
				<div class="interior_img"><img src="img/interior_img17.jpg" alt="서울홍치과 인테리어 사진" /></div>
			</div>
			<div class="interior_nav_roll"></div>		
		</div>
	</article>
</section>

<script>
$(document).ready(function(){
	$('.interior_roll .interior_img').clone().appendTo('.interior_nav_roll');
	$('.interior_roll').slick({
		fade: true,
		arrows:false,
		autoplay:true,
		autoplaySpeed:4000,
		asNavFor:'.interior_nav_roll'
	});
	$('.interior_nav_roll').slick({
		arrows:false,
		slidesToShow: 6,
		slidesToScroll: 1,
		swipeToSlide: true,
		asNavFor:'.interior_roll',
		focusOnSelect: true,
		responsive: [
			{
			breakpoint: 1251,
			settings: {
				slidesToShow: 4,
				}
			},
			/*{
				breakpoint: 641,
				settings: {
					slidesToShow: 4,
				}
			}*/
		]
	});
});
</script>

<? include_once $_SERVER['DOCUMENT_ROOT']."/common/html/footer.html"; ?>