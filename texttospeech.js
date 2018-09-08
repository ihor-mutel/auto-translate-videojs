

function speak(inputTxt){
	
	var synth = window.speechSynthesis;
	var volume = $("#volume option:selected").val()
	
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (inputTxt !== '') {
    var utterThis = new SpeechSynthesisUtterance(inputTxt);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }

        utterThis.voice = synth.getVoices()[3];

    }
    utterThis.pitch = "1"
    utterThis.rate = "0.7";
	utterThis.volume = volume
    synth.speak(utterThis);
 }
