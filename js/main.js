$(document).ready(function($) {
	var text = [ 
		"hi there!",
		"I'm a creative web developer...",
		"with a passion for building rich web interfaces using the latest web technologies.",
		"My goal is to make the web move forward...",
		"with simple, clean a user friendly content.",
		"go ahead and check my work",
		"my works are over there in the combobox",
		"if you liked what you saw...",
		"write me an email.",
		"and check my info on the social button over there to the right :)",
		"have fun.",
		"keep on developing!"
	];

var htmlElement = document.getElementById("thoughts");

var realisticTypewriter = new RealisticTypewriter();

// 10% typo rate
realisticTypewriter.accuracy = 95; 

// typing speed will be from 5 to 10 characters per second.
realisticTypewriter.minimumCharactersPerSecond = 7;
realisticTypewriter.maximumCharactersPerSecond = 10;

// waits at least 0.5 second and at most 1 second before it starts typing
realisticTypewriter.minimumInitialDelay = 500;
realisticTypewriter.maximumInitialDelay = 1200;

function writeText (counter) {
	realisticTypewriter.type(text[counter], htmlElement, function () {
		
		if (counter < (text.length - 1)) {
			
			setTimeout(function() {
				counter++;
				document.getElementById('thoughts').innerHTML = '';
				writeText(counter);
			}, 1500); } 
		else {
			console.log('done');
		}
	});
}

writeText(0);

$(".classysocial").each(function() {
    new ClassySocial(this);
});

});



