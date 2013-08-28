(function($) {
					var url = 'http://unas.siap-online.dev/denpasar/pesan/?callback=?';

					$.ajax({
						type : 'GET',
						url : url,
						async : false,
						jsonpCallback : 'jsonCallback',
						contentType : "application/json",
						dataType : 'jsonp',
						success : function pesan(data) {
							var list = '';
							data = data.pesan;
							var len = data.length;
							for (var i = 0; i < len; i++) {

								var pesan = data[i];
								//list += '<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow" data-inset="true" data-role="listview">'+'<li class="ui-li ui-li-divider ui-bar-b ui-li-has-count ui-first-child" data-role="list-divider" role="heading">'+ pesan.nama + ' ' +'||' + ' ' + pesan.email  + '</li>'+ '<li>' + '<div data-role="fieldcontain" class="result">' + '<p>' + pesan.content + '</p>'+'</div>'+'</li>' + '<div data-role="fieldcontain" class="result2" data-theme="b">' + 'Jawaban : ' + '</div>' + '</ul>';
								list +='<div data-role="header" data-theme="c">'+'<ul data-role="listview" data-inset="true">'+'<li data-role="list-divider">'+'<h2>'+pesan.nama+'</h2>'+'<p>'+pesan.email+'</p>'+'<strong>'+pesan.content+'</strong>'+'<p class="ui-li-aside">'+'<strong>'+pesan.wkt_kirim+'</strong>'+'</p>'+'</li>'+'<li data-theme="c">'+'<h2>'+'Jawaban : '+'</h2>'+'<p>'+'<strong>'+'</strong>'+'</p>'+pesan.jawab+'</p>'+'</li>'+'</ul>'+'</div>';
    
							}

							$('#list_pesan').append(list);
							//$('#list_pesan').listview('refresh');
						},
						error : function(e) {
							console.log(e.message);
						}
					});

				})(jQuery);
