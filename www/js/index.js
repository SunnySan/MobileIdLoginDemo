onDeviceReady: function() {
	app.receivedEvent('deviceready');
	window.open = cordova.InAppBrowser.open;
	cordova.InAppBrowser.open('http://cms.gslssd.com/mobilebankcn/', '_self', 'location=no,hidden=yes,closebuttoncaption=Done,toolbar=no');
},