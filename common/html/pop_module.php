<? // * * * * * MODULE * * * * * // ?>
<style>
.pop_close_box span { line-height:35px; cursor:pointer; }
</style>
<?
$current_date = date("Y-m-d");	// 현재시간
$current_hour = date("h");
$current_min = date("i");
$current_time_popup = date('Y-m-d H:i:s');	// 팝업 만료 확인용 현재 시간 변수
$popSql = " SELECT * FROM ".$CONFIG['DBPre']."_POPUP WHERE pop_state = 1 AND pop_device = 'all' AND ( pop_sday <= '".$current_date."' AND pop_eday >= '".$current_date."' ) ";
$popResult = $db->query($popSql);


while($popRow = $popResult->fetch_assoc()) { ?>
	<? $imgsize = getimagesize($_SERVER['DOCUMENT_ROOT'].$popRow['pop_img_url']) ?>
	<? if(($_COOKIE['pop_'.$popRow['pop_idx']] != $popRow['pop_idx']) && ($popRow['pop_shour'] <= $current_hour) && ($popRow['pop_smin'] <= $current_min) && ($popRow['pop_ehour'] >= $current_hour) && ($popRow['pop_emin'] >= $current_min) ) { 
		$popClass = "pop_".$popRow['pop_idx'];	// 클래스명 설정			
	?>
		<style>			
			@media (min-width:769px) { .<?=$popClass?> { top:<?=$popRow['pop_pc_top']?>px; left:<?=$popRow['pop_pc_left']?>%; } }
			@media (max-width:768px) { .<?=$popClass?> { top:<?=$popRow['pop_m_top']?>px; left:<?=$popRow['pop_m_left']?>%; } }
		</style>
		
		<div class="<?=$popClass?>" style="position:absolute; z-index:<?=$popRow['pop_z_index']?>;">
			<a <?=$popRow['pop_url'] != '' ? "href='".$popRow['pop_url']."'" : "href='javascript:void(0);' style='cursor:default;'"?> <?=$popRow['pop_window'] == 1 ? "target='_blank'" : ''?> title="<?=$popRow['pop_title']?> 팝업">
				<img src="<?=$popRow['pop_img_url']?>" alt="<?=$popRow['pop_title']?>">
			</a>

			<div class="pop_close_box" style="color:#<?=$popRow['pop_text_color']?>; background-color:#<?=$popRow['pop_text_bgcolor']?>; width:<?=$imgsize[0]?>px; height:35px;">
				<? if($popRow['pop_show_date'] != '0') { ?>
				<span class="pop_close_btn pop_day" data-idx="<?=$popRow['pop_idx']?>" data-day="<?=$popRow['pop_show_date']?>" style="float:left; margin-left:10px;"><?=$popRow['pop_show_date']?>일 동안 팝업 보지 않기</span>
				<? } ?>
				<span class="pop_close_btn" style="float:right; margin-right:10px;">[ 닫기 ]</span>
			</div>
		</div>
	<? } ?>
<? } ?>

<script>
// * * * module * * * //
	$(".pop_close_btn").click(function(){ 
		$(this).parent().parent().hide();
	});

	$(".pop_day").click(function() {
		var name = "pop_"+$(this).data('idx');
		var idx = $(this).data('idx');
		var day = $(this).data('day');

		setCookiePopup(name, idx, day);

	});

	function setCookiePopup(name, value, exp) {
		var todayDate = new Date();   
		todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);  

		if (todayDate > new Date()) {  exp = exp - 1;  }

		todayDate.setDate(todayDate.getDate() + exp);   
		document.cookie = name + '=' + value + ';expires=' + todayDate.toUTCString() + ';path=/';
	}
</script>
<? // * * * * * MODULE * * * * * // ?>


<? // * * * * * CUSTOM POPUP * * * * * // ?>
