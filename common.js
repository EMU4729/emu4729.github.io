var dom = {
	get: function(selector) {
		return document.querySelector(selector);
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

main.style.marginTop = "60px";
body.insertBefore(dom.iframe("top-bar", "top.html"), main);
body.appendChild(dom.iframe("footer", "footer.html"), main);
