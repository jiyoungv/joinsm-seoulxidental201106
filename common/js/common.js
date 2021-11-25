/* 공통 함수 */
function setHeightSame (elements){ // 높이 제각각인 컨텐츠 높이 맞추기 (ie 때문에 css의 flex 대신 사용)
	elements.css({height: 'auto'});

	var elementsOriginHeightArr = elements.map(function(){return $(this).innerHeight();}).get();
	var elementMaxHeight = Math.max.apply(null, elementsOriginHeightArr);

	elements.css({height: elementMaxHeight + 'px'});
}

/* 서브 공통 함수 */
function subTab (){ // 서브 탭
	if(page){
		$('.sub_tab_list li').eq(page-1).addClass('on');
	}
} 

function subVisualAni (){ // 서브 비주얼 애니메이션
	var $ani = $('.sub_v .ani');
	
	$ani.addClass('on');
}

function subTitLine (){ // 서브 타이틀 좌우 라인 맞추기
	var $line = $('.sub_tit .line');

	$line.each(function(){
		var $this = $(this);
		var $thisParent = $this.parent('.sub_tit');
		var $thisSiblings = $this.siblings('h2');
		var $thisWidth = Math.round($thisParent.innerWidth() / 2 - $thisSiblings.innerWidth() / 2);
		var margin = 7;

		if($thisSiblings.hasClass('style2')){
			$thisWidth = $thisWidth - margin;
		}

		$this.css({width: $thisWidth + 'px'});
	});
}

function subStepListLayout (){ // 진행과정 레이아웃
	var $txt = $('.sub_step_txt');

	setHeightSame($txt);
}

function subTargetListLayout (){ // 시술대상 레이아웃
	var $lists = $('.sub_target_list');
	var $list = $lists.find('>li');
	
	setHeightSame($list);
}

function subAttentionLayout (){ // 주의사항 레이아웃
	var $contentBox = $('.sub_attention');

	if($('html').hasClass('firstLoad_mobile')){ return false; }

	var $contentBoxWidth = $('.sub_attention').innerWidth();
	var $contentWidth = $('.sub_attention_con').innerWidth();
	var contentBgWidth = 206;
	var contentBgWidthRight = 98;
	var margin = 30;
	var minusNumber = $contentWidth + contentBgWidth + contentBgWidthRight + margin;

	$contentBox.css({paddingLeft: Math.round($contentBoxWidth - minusNumber)});
}

function firstLoadResponsive (){ // 처음 로드시 pc/m 체크 (1241px이상 pc, 1240px이하 mobile)
	var $html = $('html');
	
	if($('.doc_m').css('display') === 'none'){
		$html.addClass('firstLoad_pc');
	}else{
		$html.addClass('firstLoad_mobile');
	}
}

function resizingResponsive (){ // 리사이징시 pc/m 체크 (1241px이상 pc, 1240px이하 mobile)
	var $html = $('html');

	if($('.doc_m').css('display') === 'none'){ // pc일 때, 리사이징 할 때마다
		
		if(!$('html').hasClass('resize_pc')){ // pc일 때, 단 한번만 실행

			$('html').addClass('resize_pc').removeClass('resize_mobile');
		}
	}else{ // m일 때, 리사이징 할 때마다
			
		if(!$('html').hasClass('resize_mobile')){ // m일 때, 단 한번만 실행

			$('html').addClass('resize_mobile').removeClass('resize_pc');
		}
	}
}

$(document).ready(function(){
	firstLoadResponsive();
	
	subTab();
	subVisualAni();
	subTitLine();
	subStepListLayout();
	subTargetListLayout();
});

$(window).on('resize', function(){ // 리사이징 할 때마다
	subTitLine();
	subStepListLayout();
	subTargetListLayout();

	resizingResponsive();
});