function isIE() {
			  var userAgent = navigator.userAgent;
			  return /MSIE|Trident/.test(userAgent);
			}
			 
			if (isIE()) {
			  alert(unescape("Diese Webseite unterst%FCtzt kein Internet Explorer (IE) oder die verwendete Version Ihres Edge. \nBitte verwenden Sie einen anderen Browser."));
			  location("./426.html");
			} 