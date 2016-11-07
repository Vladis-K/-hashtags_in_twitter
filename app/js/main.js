//Focus on textInput field
/*
window.addEventListener('load', setUp, false);
function setUp(){
	var textInput;
	textInput = document.getElementById('textInput');
	textInput.focus();
};
*/

/*
var xhr = new XMLHttpRequest();
xhr.click = function() {
	if(xhr.status === 200) {
	data = allTogether(JSON.parse(xhr.responseText));
	}
};
xhr.open('GET', 'myCheck.json', true);
xhr.send(null);

function allTogether(data){
	console.log(data);
	var out = "";
	var allData = data.response.length;
	console.log(allData);
	for (var i = 0; i < allData; i++) {
		out += '<div>'
		out += "<img src=" + data.response[i].image_medium + ">" + "<br>";
		out += data.response[i].title;
		out += '</div>'
	}
	document.getElementById("download").innerHTML = out;
}

*/


    var showInfo = document.getElementById('showInfo');

    if (showInfo.addEventListener){
        showInfo.addEventListener('click', getInfo, false);
    }
    else {
        showInfo.attachEvent('click', getInfo);
    }

    function getInfo(){
        var getText = document.getElementById("textInput").value;
        if (getText.length > 0){
            document.getElementById("download").innerHTML = getText;
            console.log(getText);
            return false;
        }
        else {
            return false;
        }
    }


/*
    function getInfo() {
		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		} else if (window.ActiveXObject) { // IE 6 and older
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}

    //var url = "https://api.vk.com/smethod/video.search?sort=2&lang=4&q=prydz&access_token=10a1378d14af8c3732bf1f6412dd01c084a8ab44286fb07bac0e0c220852b9afc130ea6a44f1a65638b95&v=V?jsonp=getData";
    //var url ="https://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&v=5.59";
    var url ="myCheck.json";


    request.open("GET", url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
        	//Check the types of data
        	var type = request.getResponseHeader("Content-Type");
			console.log(type);

			if (type === "application/json") {
				//application/javascript
				getData(JSON.parse(request.responseText));
				console.log(type)
			}
			else {
				getData(request.responseText);
			}
        }
		else  { // if (xhr.status != 200)
			console.log("Status property of XMLHttpRequest: " + request.status + " StatusText property:" + request.statusText);
		}
    };

    request.send();

		function getData(data) {
			console.log(data);
			var out = "";
			var allData = data.response.length;
			console.log(allData);
			for (var i = 0; i < allData; i++) {
				out += '<div>'
				out += "<img src=" + data.response[i].image_medium + ">" + "<br>";
				out += data.response[i].title;
				out += '</div>'

			}
			document.getElementById("download").innerHTML = out;
			//showInfo.disabled = true;
		};



};



*/

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


