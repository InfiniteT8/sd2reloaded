var rq;
if(window.XMLHttpRequest) {
	rq =  new XMLHttpRequest();
} else {
	rq = new  ActionXObject("Microsoft.XMLHTTP");
}

rq.open('GET','data.xml');
rq.onreadystatechange = function() {
	if(rq.status == 200 && rq.readyState === 4) {
		console.log(rq);
		console.log(rq.responseText);
	}
}
rq.send();

$('#mods').click(function() {
	$('title').html('Mods');
	$('.content-left').load('index2.html');
})

$('#hacks').click(function(){
	$('title').html('Hacks');
	$('.content-left').load("index3.html");
});

$('#taunts').click(function() {
	$('title').html('Taunts');
	$('.content-left').load('index4.html');
});

$('#video').click(function() {
	$('title').html('Videos');
	$('.content-left').load('index5.html');
})

