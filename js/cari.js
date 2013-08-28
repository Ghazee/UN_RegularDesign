$(document).ready(function() {
	$( "#error-msg" ).popup();
	$("#cari").click(function() {

		// Post string
		var post_kJenjang = $.trim($("#k_jenjang").val());
		var post_noujian = $.trim($("#no_ujian").val());
		var post_tglLhr = $.trim($("#tgl_lhr").val());
		var post_blnLahir = $.trim($("#bln_lahir").val());
		var post_thnLahir = $.trim($("#thn_lahir").val());
		var post_tglLahir = post_thnLahir + "-" + post_blnLahir + "-" + post_tglLhr;
		var post_captcha = $.trim($("#captcha").val());

		$.ajax({
			type : 'GET',
			url : "http://unas.siap-online.dev/denpasar/cari/?k_jenjang=" + post_kJenjang + "&no_ujian=" + post_noujian + "&tgl_lahir=" + post_tglLahir + "&captcha=" + post_captcha + "&callback=?",
			async : false,
			// jsonpCallback : '',
			contentType : "application/json",
			dataType : 'jsonp',
			success : function (data) {
				//on error
				if (data.code == 99999 && data.message) {
					$( "#error-msg p").empty();
					$( "#error-msg p").html(data.message);
					$( "#error-msg" ).popup( "open" )

				} else {
					$.mobile.changePage($('#page_hasilCari'), {transition : "slide"});
					$('#list_hasil').empty();
					//array 0 = biodata siswa
					
					$.each(data[0][1], function(key, value){
						$('#list_hasil').append('<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">'+'<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow" data-inset="true" data-role="listview">'+'<li class="ui-li ui-li-divider ui-bar-b ui-li-has-count ui-first-child" data-role="list-divider" role="heading">'+ value[0] +'</li>'+ '<li class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c">' + '<div class="ui-btn-inner ui-li">' + '<div class="ui-btn-text">' + '<p>' + value[1] + '</p>'+'</div>'+'</div>'+'</li>'+'</ul>'+'</div>');
						//$('#list_hasil').append('<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">'+'<h3>'+'Biodata Siswa'+'</h3>'+'<ul data-role="listview">'+'<li>'+'1'+'</li>'+'</ul>'+'</div>');
					});
					//array 1 =
					$.each(data[1][1], function(key, value){
						$('#list_hasil').append('<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">'+'<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow" data-inset="true" data-role="listview">'+'<li class="ui-li ui-li-divider ui-bar-b ui-li-has-count ui-first-child" data-role="list-divider" role="heading">'+ value[0] +'</li>'+ '<li class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c">' + '<div class="ui-btn-inner ui-li">' + '<div class="ui-btn-text">' + '<p>' + value[1] + '</p>'+'</div>'+'</div>'+'</li>'+'</ul>'+'</div>');
						//$('#list_hasil').append('<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">'+'<h3>'+'Nilai Ujian Nasional'+'</h3>'+'<ul data-role="listview">'+'<li>'+'1'+'</li>'+'</ul>'+'</div>');
					});
					//array 2 =
					$.each(data[2][1], function(key, value){
						$('#list_hasil').append('<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">'+'<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow" data-inset="true" data-role="listview">'+'<li class="ui-li ui-li-divider ui-bar-b ui-li-has-count ui-first-child" data-role="list-divider" role="heading">'+ value[0] +'</li>'+ '<li class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c">' + '<div class="ui-btn-inner ui-li">' + '<div class="ui-btn-text">' + '<p>' + value[1] + '</p>'+'</div>'+'</div>'+'</li>'+'</ul>'+'</div>');
						//$('#list_hasil').append('<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">'+'<h3>'+'Nilai Ujian Sekolah'+'</h3>'+'<ul data-role="listview">'+'<li>'+'1'+'</li>'+'</ul>'+'</div>');
					});
					//array 3 =
					$.each(data[3][1], function(key, value){
						$('#list_hasil').append('<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">'+'<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow" data-inset="true" data-role="listview">'+'<li class="ui-li ui-li-divider ui-bar-b ui-li-has-count ui-first-child" data-role="list-divider" role="heading">'+ value[0] +'</li>'+ '<li class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c">' + '<div class="ui-btn-inner ui-li">' + '<div class="ui-btn-text">' + '<p>' + value[1] + '</p>'+'</div>'+'</div>'+'</li>'+'</ul>'+'</div>');
						//$('#list_hasil').append('<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">'+'<h3>'+'Status Kelulusan'+'</h3>'+'<ul data-role="listview">'+'<li>'+'1'+'</li>'+'</ul>'+'</div>');
					});
				}
			},
			error : function(e) {
				console.log(e.message);
			}
		});

	});
});