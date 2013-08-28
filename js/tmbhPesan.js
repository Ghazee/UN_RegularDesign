$(document).ready(function() {
		   $( "#error-msg" ).popup();
			$('#pesan-send').click(function(e) {
				e.preventDefault();

				// Post string
				var post_pnama = $.trim($("#pesan[nama]").val());
				var post_pemail = $.trim($("#pesan[email]").val());
				var post_pjudul = $.trim($("#pesan[judul]").val());
				var post_pcontent = $.trim($("#pesan[content]").val());
				var post_pistampil = $.trim($("#pesan[is_tampil]").val());
				var post_piskirim =$.trim($("#pesan[is_kirim]").val());
				var post_captcha = $.trim($("#captcha").val());

				$.ajax({
					type : 'POST',
					url : "http://unas.siap-online.dev/denpasar/pesan/insert/?pesan[nama]=" + post_pnama + "&pesan[email]=" + post_pemail + "&pesan[judul]=" + post_pjudul + "&pesan[content]=" + post_pcontent + "&pesan[is_tampil]=" + post_pistampil + "&pesan[is_kirim]=" + post_piskirim + "&captcha=" + post_captcha + "&callback=?",
					async : false,
					// jsonpCallback : '',
					contentType : "application/json",
					dataType : 'jsonp',
					success : function(data) {
						//on error
						if (data.code == 99999 && data.message) {
							$("#error-msg p").empty();
							$("#error-msg p").html(data.message);
							$("#error-msg").popup("open")

						} else {
							$.mobile.changePage($('#page_pesan'), {
								transition : "slide"
							});
						}
					},
					error : function(e) {
						console.log(e.message);
					}
				});

			});
		});