var oleftSearch = document.getElementById('leftSearch');
var oleftSearchUl = document.getElementById('leftSearchUl');
var orightSubmit = document.getElementById('rightSubmit');
var oleftSearchUlParent = document.getElementById('leftSearchUlParent');

function tian(data){
	var html = '';
	if (data.s.length) {
		oleftSearchUlParent.style.display = 'block';
		for (var i = 0; i < data.s.length; i++) {
			html += '<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';
		}
		oleftSearchUl.innerHTML = html;
	} else {
		oleftSearchUlParent.style.display = 'none';
	}
}


oleftSearch.onkeyup = function(){
	if (this.value != '') {
		var oScript = document.createElement('script');
		oScript.src='http://suggestion.baidu.com/su?wd='+this.value+'&cb=tian';
		document.body.appendChild(oScript);
	} else {
		oleftSearchUlParent.style.display = 'none';
	}
}
orightSubmit.onclick = function(){
	location.href="http://www.baidu.com/s?wd="+oleftSearch.value+"";
}
oleftSearch.onfocus = function(){
	console.log(1);
	if (this.value != '') {
		var oScript = document.createElement('script');
		oScript.src='http://suggestion.baidu.com/su?wd='+this.value+'&cb=tian';
		document.body.appendChild(oScript);
	} else {
		oleftSearchUlParent.style.display = 'none';
	}

	function tian(data){
	var html = '';
	if (data.s.length) {
		oleftSearchUlParent.style.display = 'block';
		for (var i = 0; i < data.s.length; i++) {
			html += '<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';
		}
		oleftSearchUl.innerHTML = html;
	} else {
		oleftSearchUlParent.style.display = 'none';
	}
	}
}
oleftSearch.onblur =function(){
	oleftSearchUlParent.style.display = 'none';
}