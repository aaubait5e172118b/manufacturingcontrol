var request;
if (window.XMLHttpRequest) {
	request=new XMLHttpRequest();
} else {
	request=new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'result.json');
request.onreadystatechange = function() {
	if ((request.status === 200) &&
		(request.readyState === 4)) {

			jsonData = JSON.parse(request.responseText);
			var output='';
	
			function print(key,value) {
			    output += "<p>" + key + " : " + value + "</p>";			    
			}
			
			function printObjects(jsonData, func){
				for (var i in jsonData) {
					func(i, jsonData[i])
					if (jsonData[i] != null && typeof(jsonData[i])=="object") {
						printObjects(jsonData[i], func)
					}
				}
			}

			printObjects(jsonData,print);
			
			
			var update = document.getElementById('dataObjects');
			update.innerHTML = output;
			
	} 
} 
request.send();