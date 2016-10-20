
//Set focus on textInput field
window.addEventListener('load', setUp, false);

function setUp(){
	var textInput;
	textInput = document.getElementById('textInput');
	textInput.focus();
};

//Check field
/*
var el = document.getElementById('textInput');

var elMsg = document.getElementById('feedback');
function checkUsername(){
		var username = el.value;
		if(username.length < 3){
			setTimeout(function (){
			elMsg.textContent = 'Должно быть минимум 3 символа...';}, 1500);
		}
		else {
			elMsg.textContent = '';
		}
};

if(el.addEventListener){
	el.addEventListener('keydown', checkUsername, false);
}
else {
	el.attachEvent('keydown', checkUsername);
}
*/

var newSubmit = document.getElementById('newSubmit')

newSubmit.addEventListener ('submit', showData, false);

function showData(url, showFunction) {

	var access_token_video = "882d879e80d1d624154c5c64e526a174966a25a86ea06095a6c5b5a7f5f1f006475f9553dd5104d11dbf6";
	var getText = document.getElementById('textInput').value;
	console.log(getText);
	var url = "https://api.vk.com/method/video.search?sort=2&" + getText + "&access_token=" + access_token_video + "&v=V";
	console.log(url);


	var request = new XMLHttpRequest();

	// request.onreadystatechange = function () {
	// 	if (this.readyState == 4 && this.status == 200) {
	// 		showFunction();
	// 	}
	// }
	request.open('GET', url, true);
	request.send(null);
}

// request.onload =

    request.onload = function showFunction() {

		for (var i = 0; i < 5; i++) {
			console.log(catalog[i]);
			var newContent = '';
			newContent += "<div class='videoCard'>";
			newContent += "<iframe src=' " + catalog[i].player + "' frameborder='0' allowfullscreen></iframe>";
			newContent += "<span>" + timeWell(catalog[i].duration) + "</span>";
			newContent += "<div class='timemovie'>" + compression(catalog[i].title) + "</div>";
			newContent += "</div>";
		}
		document.getElementById('videoframes').innerHTML = newContent;
	}





/*
window.addEventListener('beforeunload', function(event) {
	// This example has been updated to improve cross-browser compatibility (as recommended by MDN)
	var message = 'You have changes that have not been saved';
	(event || window.event).returnValue = message;
	return message;
});
*/




/*jQuery(document).ready(function(){

	$('#searchForm').on( "submit", function(event){

		$("span#videoframes").html("");
		event.preventDefault();
		var $textInput = $('input:text');

		// if ($textInput.length == 0){bower chosen -v
		//     $('span#videoframes').html("Please repeat your searching.");
		//     return false;
		// }

		var getText = $textInput.serialize();

		console.log(getText);                                            //Search input text
		var access_token_video = "882d879e80d1d624154c5c64e526a174966a25a86ea06095a6c5b5a7f5f1f006475f9553dd5104d11dbf6";
		var access_token_audio = "a49a6b83224bba6cfb3bf6437b54a26ff1e8c65dc721c27f081f92e94e0d5d664a25ad7e21f960a4673c0";
		var x = $('select#mySearch').val();                              //Get selected option (audio,video)

		function getlink(){                                              //Function get video or audio
			console.log(x);
			var searchLink;
			if ( x == "video" ) {
				searchLink = "https://api.vk.com/method/video.search?sort=2&" + getText
					+"&access_token=" + access_token_video + "&v=V";
			}
			else if ( x == "audio" ) {
				searchLink = "https://api.vk.com/method/audio.search?sort=2&" + getText
					+ "&access_token=" + access_token_audio + "&v=V";
			}
			else {searchLink = "" }
			return searchLink;
		};

		console.log( getlink() );


		$.ajax({
			method: "GET",
			url: getlink(),
			data: null,
			dataType: "jsonp",
			beforeSend: function(){
				$('#videoframes').append('<div id="loading">Loading</div>');
				$('.videoCard').html('');
				$('.audioCard').html('');
			},
			complete: function() {
				$('#loading').remove();

			},
			success: function(data){
				var catalog = data.response;
				// var step = catalog.length;
				var newContent="";

				function timeWell(duration) {
					var min = Math.floor(duration / 60);
					var sec = (duration % 60);
					var mod = sec <= 9 ? sec = "0" + sec : sec;
					var timesong = ( min + ":" + mod );
					return timesong;
				};

				function compression(title) {
					var short = title.substr(0, 37);
					return short + '...';
				};

				if (x=="video"){
					for (var i = 0; i < 5; i++) {
						console.log(catalog[i]);
						newContent += "<div class='videoCard'>";
						newContent += "<iframe src=' " + catalog[i].player + "' frameborder='0' allowfullscreen></iframe>";
						newContent += "<span>" + timeWell(catalog[i].duration) + "</span>";
						newContent += "<div class='timemovie'>" + compression(catalog[i].title) + "</div>";
						newContent += "</div>";
					}
					$('#videoframes').before(newContent);
					return false;
				}
				else if (x=="audio"){
					for (var i = 1; i < 6; i++) {
						console.log(catalog[i]);
						newContent += "<div class='audioCard'>";
						newContent += "<div><button><i class='fa fa-play' aria-hidden='true'></i></button></div>";
						newContent += "<div class='artist'>" + catalog[i].artist + "<span>-</span>" + "</div>";
						newContent += "<div class='timemovie'>" + catalog[i].title + "</div>";
						newContent += "<div class='duration'>" + timeWell(catalog[i].duration) + "</div>";
						newContent += "</div>";
					}
					$('#videoframes').before(newContent);
					return false;
				}
				else {
					return false
				}

				// };


				// NEXT LOADING
				// $('#showElse').on('click', function() {
				// 	var initial = 2;
				// 	function checkIteration(initial) {
				// 		return initial = initial+2 ;
				// 	};
				// 	for (i = checkIteration(initial); i<(initial+2); i++) {
				// 		console.log(catalog[i]);
				// 		newContent += "<div class='videoCard'>";
				// 		newContent += " <iframe src=' "+ catalog[i].player +"' frameborder='0' allowfullscreen></iframe>";
				// 		newContent += "<div>" + "<span>" + timeWell(catalog[i].duration) + "</span>";
				// 		newContent += "<div class='timemovie'>" +  compression(catalog[i].title) + "</div>";
				// 		newContent += "</div>";
				// 	};
				// 	$('#videoframes').after(newContent);
				// 	return false;
				// });


				// 1st variant
				// var items = [];
				// data.response.shift();
				// $.each(data.response, function(){
				// items.push(  "<iframe src='" + this.player +"' frameborder='0' allowfullscreen></iframe>" + "<div>"
				// + this.title +  "<span class='timemovie'>" + timeWell(this.duration) + "</span>" +  "</div>");
				// 	});
				// 	$( "<div>", {
				// 		html: items.join( "" )
				// 		}).appendTo( "span#videoframes" );


			},
			error: function(){
				$('#videoframes').append('<div id="loading">Try again.</div>');
			}
		});
	});

});

*/