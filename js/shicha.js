$(function(){
	var oUl=document.getElementById('ul_container'),
		l = oUl.offsetWidth/2,
		t = oUl.offsetHeight/2,
		aLi=document.getElementsByTagName('li');
	oUl.onmousemove = function( ev ){
		var oEv = ev || event,
			iL = oEv.clientX,
			iT = oEv.clientY;

		for(var i=0; i<aLi.length; i++){
			aLi[i].style.marginLeft=(iL - l )/100*aLi[i].style.zIndex+'px';
			aLi[i].style.marginTop=(iT - t )/70*aLi[i].style.zIndex+'px';
		}
	}

});


$(function(){
	var oUl=document.getElementById('ul_666'),
		l = oUl.offsetWidth/2,
		t = oUl.offsetHeight/2,
		aLi=document.getElementsByTagName('li');
	oUl.onmousemove = function( ev ){
		var oEv = ev || event,
			iL = oEv.clientX,
			iT = oEv.clientY;

		for(var i=0; i<aLi.length; i++){
			aLi[i].style.marginLeft=(iL - l )/100*aLi[i].style.zIndex+'px';
			aLi[i].style.marginTop=(iT - t )/70*aLi[i].style.zIndex+'px';
		}
	}

});
