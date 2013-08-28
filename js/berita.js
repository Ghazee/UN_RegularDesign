function changePage(id) {
		$.mobile.changePage($(id), {transition : "slide"});
	}
	
				(function($) {
					var url = 'http://unas.siap-online.dev/denpasar/berita/?callback=?';

					$.ajax({
						type : 'GET',
						url : url,
						async : false,
						jsonpCallback : 'jsonCallbackk',
						contentType : "application/json",
						dataType : 'jsonp',
						success : function berita(data2) {
							 var beritaData = data2.berita;

      

	    $.each(beritaData, function(index, berita) {
			//console.log(berita);

		    $('#result-listview').append(
		      '<li>'  +
		        '<a href="" onclick="changePage(id_' + index + ');">' +
					'<h3>' + berita.judul + '</h3>' +
				'</a>' +
		      '</li>'
		    );

		    /*
				Here we are dynamically creating a new page.
				When a list item is clicked, this is what is actually shown.
				Do not forget to append this block of code
				to the body tag. If appended mistakenly somewhere else,
				the code wont work.
		    */
		   var content  = 	'<div data-role="page" id="id_' + index + '" data-url="id_' + index + '">' +
							'<div data-role="header" data-position="fixed" data-theme="b">' +
							'<a href="#" data-rel="back" data-icon="back">Back</a>' + '<a data-role="button" class="ui-btn-right" id="bt_share" href="#page_share" data-rel="dialog" data-transition="pop" data-icon="gear" data-iconpos="notext"></a>' +
							  '<h1>' + berita.judul + '</h1>' +
							'</div>' +
							'<div data-role="content">' +
							  '<p>' + 
							    '<div data-role="fieldcontain" class="result">'+ '<font color="blue">' + 'Di Postkan Pada:   ' + berita.wkt_tayang + '</font>' +'<br/>' + berita.content 
							    '</div>' +
							  '</p>' +
							'</div>' +
							
					    '</div>';
						
						

			$('body').append(content);

			/*Tell JQM to enhance the page with the required classes.*/
			$(index).page();

        });	// end for each
		
	  	$('#result-listview').listview('refresh');
      //}
	  
    
						},
						error : function(e) {
							console.log(e.message);
						}
					});

					
				})(jQuery);
