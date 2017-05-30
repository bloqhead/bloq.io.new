(function() {

	/**
	 * Global vars
	 */
	const theBody = document.getElementsByTagName("body")[0];
	const noJsClass = "no-js";
	const hasJsClass = "yes-js";

	/**
	 * JavaScript check
	 */
	function JSCheck() {
		theBody.classList.remove(noJsClass);
		theBody.classList.add(hasJsClass);
	}
	JSCheck();

})();
