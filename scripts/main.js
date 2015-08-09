var rq;
if(window.XMLHttpRequest) {
	rq =  new XMLHttpRequest();
} else {
	rq = new  ActiveXObject("Microsoft.XMLHTTP");
}

var modInfo = {};
modInfo.el = function(el) {
	return rq.responseXML.getElementsByTagName(el);
}

//mods ui
$('#mods').click(function() {
 	 $('title').html('Mods');
	 $('.page-title').html('MODS');
	 $('#mods-info-left').show();
	 $('#home-info-left').hide();
	 $('#taunts-info-left').hide();
	 $('#videos-info-left').hide();
	 $('#hacks-info-left').hide();
});

var modName = document.getElementById('mods-name');

modName.addEventListener('click',function(e) {
	console.log('mod container clicked');
	rq.open('GET','data2.xml');
	rq.onreadystatechange = function() {
		if( rq.status == 200 && rq.readyState == 4) {
				//test for clicked li
				if(e.target && e.target.nodeName == 'LI') {
						var modSearch = e.target.id;
						console.log('searching for id: ' + e.target.id);
				}//end li bool

			var modId = modInfo.el('id'),
					modName = modInfo.el('name'),
					modAuthor = modInfo.el('author'),
					modVersion = modInfo.el('version'),
					modDate = modInfo.el('date'),
					modDesc = modInfo.el('description'),
					modLink = modInfo.el('link');
			var output;

			for(var i = 0; i < modId.length; i++) {
				if(modSearch == modId[i].firstChild.nodeValue) {
					output = 'Mod Name: ' + modName[i].firstChild.nodeValue + '<br><br>' +
									 'Author: ' + modAuthor[i].firstChild.nodeValue + '<br>' +
									 'Version: ' + modVersion[i].firstChild.nodeValue + '<br>' +
									 'Date: ' + modDate[i].firstChild.nodeValue + '<br><br>' + 
									 'Mod Info: <br>' + modDesc[i].firstChild.nodeValue + '<br><br>' +
									 '<a href=' + modLink[i].firstChild.nodeValue + "' target='_Blank'>"+
									 'Download Link' + '</a>';
				}
			}//end loop
			$('#mods-info-right').html(output);
		}//end main bool
	}//end onreadystatechange

	rq.send();

});

//hacks ui
$('#hacks').click(function(){
	$('title').html('Hacks');
	$('.page-title').html('HACKS');
	$('#hacks-info-left').show();
	$('#taunts-info-left').hide();
	$('#videos-info-left').hide();
	$('#mods-info-left').hide();
	$('#home-info-left').hide();
	$('#mods-info-right').empty();
});

//taunts ui
$('#taunts').click(function() {
	$('title').html('Taunts');
	$('.page-title').html('TAUNTS');
	$('#taunts-info-left').show();
	$('#home-info-left').hide();
	$('#videos-info-left').hide();
	$('#hacks-info-left').hide();
	$('#mods-info-left').hide();
	$('#mods-info-right').empty();
});

//videos ui
$('#video').click(function() {
	$('title').html('Videos');
	$('.page-title').html('VIDEOS');
	$('#videos-info-left').show();
	$('#home-info-left').hide();
	$('#taunts-info-left').hide();
	$('#hacks-info-left').hide();
	$('#mods-info-left').hide();
	$('#mods-info-right').empty();
})

