var i = 0;

var myVar = setInterval(myTimer, 600);

function myTimer () {

    var els = document.getElementById("contents").getElementsByClassName("ytd-subscribe-button-renderer");

    if (i < els.length) {

	if(els[i].querySelector('.ytd-subscribe-button-renderer')){
				els[i].querySelector('.ytd-subscribe-button-renderer').click();

			setTimeout(function () {

				var unSubBtn = document.getElementById("confirm-button").click();

			}, 1000);

			setTimeout(function () {

				els[i].parentNode.removeChild(els[i]);

			}, 2000);
	}


    }

    i++;

    console.log(i + " unsubscribed");
    console.log(els.length + " remaining");
}
