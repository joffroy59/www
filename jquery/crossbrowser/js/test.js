

test('GET', function(){
    
    expect(1);
    stop();
    
    jQuery.get('http://google.com', function(res){
        ok(
            !!(res && res.responseText),
            'GET Request to Google.com succeeded!'
        );
        start();
    });

	$('#container').load('https://www.google.fr/?gfe_rd=cr&ei=aqOuU7KlHMuA8QeClYHQDA'); // SERIOUSLY!
});