"use strict";

(function () {

	/**
  * Global vars
  */
	var theBody = document.getElementsByTagName("body")[0];
	var noJsClass = "no-js";
	var hasJsClass = "yes-js";

	/**
  * JavaScript check
  */
	function JSCheck() {
		theBody.classList.remove(noJsClass);
		theBody.classList.add(hasJsClass);
	}
	JSCheck();
})();
//# sourceMappingURL=app.js.map
