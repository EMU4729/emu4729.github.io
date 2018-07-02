var dom = {
	get: function(selector) {
		return document.querySelector(selector);
	},
	getAll: function(selector) {
		return document.querySelectorAll(selector);
	},
	create: function(tag) {
		return document.createElement(tag);
	},
	iframe: function(id, src) {
		var iframe = dom.create("iframe");
		iframe.id = id;
		iframe.src = src;
		return iframe;
	}
}

var body = dom.get("body");
var main = dom.get("#main");

body.insertBefore(dom.iframe("top-bar", "/common/top.html"), main);
body.appendChild(dom.iframe("footer", "/common/footer.html"), main);
