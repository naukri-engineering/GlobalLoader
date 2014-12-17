$.fn.gLoader = function(){
	var prv = {
		meta : {
			obj : $(this),
			srlW : 0
		},
		
		block : function(){
			var t=prv;
			t.meta.srlW = t.scrollbarWidth();
			t.appendGL();
			t.styleIE7n8();
		},
		
		unblock : function(){
			var t=prv;
			t.meta.obj.each(function(){
				var c=$(this),currGL = $(this).find('> #gL');
				currGL.fadeOut({
					complete:function(){
						c.css({'position':t.meta.obj.attr('cssProp').split(',')[0],'overflow':t.meta.obj.attr('cssProp').split(',')[1]});
						currGL.remove();	
					}
				});
			});
		},
		
		appendGL : function(){
			var t = prv,
				lContHtml = $('<div>').attr({'id':'gL'});
				
			t.meta.obj.each(function(){
				var c = $(this),cW = t.objW(c), cH = t.objH(c);
				if(c.find('> #gL').length!==0)return;
				var currLCont = lContHtml.clone();
				t.setClass(c,currLCont);
				c.attr({'cssProp':c.css('position')+','+c.css('overflow')});
				c.css({'position':'relative','overflow':'hidden'}).append(currLCont.css({'width':cW+t.srlW+'px','height':cH+'px',top:t.scrollTop(c)+'px'}).fadeIn());
				$(window).on('resize',function(){t.resize();});
				$(window).on('scroll',function(event){t.resize();});
			});
		},
		
		objW : function(obj){return (obj.get(0).nodeName.toLowerCase() == 'body') ? $(window).width() : $(obj).outerWidth();},
		
		objH : function(obj){return (obj.prop('tagName').toLowerCase() == 'body') ? $(window).height() : $(obj).outerHeight();},
		
		scrollbarWidth : function() {
		  var parent,child,width;
		  if(width===undefined) {
			parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
			child=parent.children();
			width=child.innerWidth()-child.height(99).innerWidth();
			parent.remove();
		  }
		 return width;
		},
		
		scrollTop : function(ob){
			return (ob.prop('tagName').toLowerCase() == 'body') ? $(window).scrollTop() : ob.scrollTop();
		},
		
		setClass : function(c,currLCont){
			var t=prv,cW = t.objW(c), cH = t.objH(c),glClass = 'nLoader45';
			if((cW>0 && cH>0) && (cW<=100 || cH<=100)){glClass='nLoader20';}
			else if((cW>100 && cH>100) && (cW<=400 || cH<=400)){glClass='nLoader20';}
			currLCont.removeClass(function (index, css){return (css.match (/nLoader\S+/g) || []).join(' ');}).addClass(glClass);
		},
		
		resize : function(){
			var t = prv;
			t.meta.obj.each(function(){
				var c = $(this),cW = t.objW(c), cH = t.objH(c),currLCont=null;
				if(c.find('> #gL').length===0)return;
				else{currLCont = c.find('> #gL');}
				t.setClass(c,currLCont);
				currLCont.css({'width':t.objW(c)+t.srlW+'px','height':t.objH(c)+'px',top:t.scrollTop(c)+'px'});
			});
		},
		
		styleIE7n8 : function(){
			var stl = '<!--[if lt IE 9]><style type="text/css">.nLoader60,.nLoader45,.nLoader20,.nLoader15,.nLoader10{background-color:#fff; filter:alpha(opacity=80);}<![endif]-->';
			$('head').append(stl);
		}
		
	};
	
	return {
		block : prv.block,
		unblock : prv.unblock,
		resize : prv.resize
	};
};