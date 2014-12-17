asyncTest('Global Loader Test Cases',function(){
	equal($('body #gL').length,0,'No Loader layer created in "Body" Tag');
	$('body').gLoader().block();
	equal($('body #gL').length,1,'Loader layer created  of "Body" Tag');
	equal($('body #gL').css('display'),'block','Loader layer displayed-block  of "Body" Tag');
	equal($('body').attr('cssProp'),'static,visible','Attribiute "cssProp" set on Body Tag');
	equal($('body').css('position'),'relative','"Position" property of body set to "relative" of "Body" Tag');
	equal($('body').css('overflow'),'hidden','"Overflow" property of body set to "hidden" of "Body" Tag');
	$('body').gLoader().unblock();
	setTimeout(function(){
		start();
		equal($('body #gL').length,0,'Loader layer removed  of "Body" Tag');
		equal($('body').css('position'),'static','"Position" property of body set to "static"');
		equal($('body').css('overflow'),'visible','"Overflow" property of body set to "visible"');
		
		
		$('#testCont1').gLoader().block();
		equal($('#testCont1 #gL').length,1,'Loader layer created of "#testCont1"');
		equal($('#testCont1 #gL').css('display'),'block','Loader layer displayed-block of "#testCont1"');
		equal($('#testCont1').attr('cssProp'),'static,visible','Attribiute "cssProp" set on "#testCont1"');
		equal($('#testCont1').css('position'),'relative','"Position" property of body set to "relative" of "#testCont1"');
		equal($('#testCont1').css('overflow'),'hidden','"Overflow" property of body set to "hidden" of "#testCont1"');
		
		ok($('#testCont1 #gL').hasClass('nLoader45'),'Loader size "45" displayed');
		$('#testCont1').animate({width:"99px",height:"99px"},0,function(){$('#testCont1').gLoader().resize();});
		ok($('#testCont1 #gL').hasClass('nLoader20'),'Loader size "20" displayed');
		$('#testCont1').animate({width:"399px",height:"399px"},0,function(){$('#testCont1').gLoader().resize();});
		ok($('#testCont1 #gL').hasClass('nLoader20'),'Loader size "20" displayed');
		$('#testCont1').animate({width:"500px",height:"500px"},0,function(){$('#testCont1').gLoader().resize();});
		ok($('#testCont1 #gL').hasClass('nLoader45'),'Loader size "45" displayed');
		
		
		stop();
		$('#testCont1').gLoader().unblock();
		setTimeout(function(){
			start();
			equal($('#testCont1 #gL').length,0,'Loader layer removed of "#testCont1"');
			equal($('#testCont1').css('position'),'static','"Position" property of "#testCont1" set to "static"');
			equal($('#testCont1').css('overflow'),'visible','"Overflow" property of "#testCont1" set to "visible"');
			$('#testCont1').hide();
		},1000);
		
	},1000);
});