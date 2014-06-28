$( document ).ready(function() {
	$('#containerHeader').html("code goes here ");
	//$('#container').html("code goes here 2");

	//$('#container').load('https://www.google.fr/?gfe_rd=cr&ei=aqOuU7KlHMuA8QeClYHQDA'); // SERIOUSLY!
	//alert();
	/*$.ajax({
		url: 'https://www.google.fr/?gfe_rd=cr&ei=aqOuU7KlHMuA8QeClYHQDA',
		type: 'GET',
		success: function(res) {
			$('#container').html(changeSrcHost($(res.responseText),'https://www.google.fr').find('#hplogo'));
			//$('#container').html(res.responseText);
			//console.log(res.responseText);
			//$('#container').html($(res.responseText).find('a'));
		}
	});*/
	
	//TODO use sablier onload ajax
	
	var $loading = $('#containerPureJquery').show();
	$loading.html('<img src="img/spinner.gif" alt="Wait"  width="30px"/>');
	$.ajax({
		url: 'https://www.google.fr/?gfe_rd=cr&ei=aqOuU7KlHMuA8QeClYHQDA',
		type: 'GET',
		xpath: '//body',
		success: function(res) {
			$('#containerPureJquery').html(changeSrcHost($(res.responseText),'https://www.google.fr').find('#hplogo'));
		},
		error : function(err){
			$('#containerPureJquery').html("Error Loading");
			console.error(err);
		}
	});
	
});

function changeSrcHost(doc,baseHost){
	logo = doc.find('#hplogo');
	logoSrc = logo.attr('src');
	logo.attr('src',baseHost+logoSrc);
	return doc;

}