function addWatchHistory(videoLink, subLink) {
    var retrievedObject = localStorage.getItem('movie');
    if (retrievedObject) {
        var obj = JSON.parse(retrievedObject)[0]
    }

    if (!obj) {
        obj = [{
            "video": videoLink,
            "subs": subLink
        }]
    } else {
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].video == videoLink) {
                return
            }
        };

        obj.push({
            "video": videoLink,
            "subs": subLink
        })
    }
    localStorage.setItem('movie', JSON.stringify([obj]));
}

function listWatchHistory() {
    var retrievedObject = localStorage.getItem('movie');
    var obj = JSON.parse(retrievedObject)[0]

	var myDiv = document.body;
	selectList = document.createElement("select");
	selectList.id = "mySelect";
	myDiv.appendChild(selectList);

	//Create and append the options
	for (var i = 0; i < obj.length; i++) {
		var option = document.createElement("option");
		option.value = i;
		option.text = obj[i].video;
		selectList.appendChild(option);
	}
	
}

function val() {
	var retrievedObject = localStorage.getItem('movie');
    var obj = JSON.parse(retrievedObject)[0]
	
    d = selectList.value;
	document.getElementsByClassName("videoInput")[0].value = obj[d].video
	document.getElementsByClassName("srtInput")[0].value = obj[d].subs
    console.log(obj[d].video);
    console.log(obj[d].subs);
}

//addWatchHistory("Choose from history","initial")
//listWatchHistory()
selectList.onchange = val;



