

var e = document.createElement("script");
e.appendChild(document.createTextNode("function isQQBrowser() { try {if (api != null && api.isQQBrowser != null) { api.isQQBrowser = function () { return true; }; }} catch (e) {}}setInterval(isQQBrowser(), 10);"));
e.setAttribute("type", "text/javascript")
document.body.appendChild(e)