
function listWatchHistory(data) {

	// var myDiv = document.body;
	var myDiv = document.getElementById("select-cont");
	selectList = document.createElement("select");
	selectList.id = "mySelect";
	
	selectList.classList.add("custom-select")
	myDiv.appendChild(selectList);

	//Create and append the options
	for (var i = 0; i < data.length; i++) {
		if(data[i].name.includes("mp4")){
		var option = document.createElement("option");
		option.value = data[i].name;
		option.text = data[i].name.replaceAll("_"," ");
		selectList.appendChild(option);
		}
	}
	
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function val() {
	var origin = window.location.origin
    var videoPath = origin + "/files/" + $( "#mySelect" ).val();
	var srtPath =  origin + "/files/" +  $( "#mySelect" ).val().replace("mp4","vtt")
	
	document.getElementById("videoInput").value = videoPath
	document.getElementById("srtInput").value = srtPath
	
	$("#videoSrc")[0].src = videoPath
	$("#sutitleSrcSRT")[0].src = srtPath
	

}
function initHistory() {
		    try {
				
				var origin = window.location.origin
				var path = origin + "/files/"
				$.get( path, function( data ) {
					listWatchHistory(data)
					selectList.onchange = val;
				});
			} catch (err) {
				console.log(err)
				
				setTimeout(function() {
					initHistory();
				}, 300);
			}       
}		
initHistory()




