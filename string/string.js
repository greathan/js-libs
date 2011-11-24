String.prototype.toRegExpString = function(){
	return this.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
};
String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g, '');
};
String.prototype.$replace = function(obj) {
	return this.replace(/\$\{([\w\.?]+)\}/g, function(s, k) {
		var keys = k.split('.'), l = keys.length;
		var key = keys[0];
		if (l > 1) {
			var o = obj;
			for (var i = 0; i < l; i++) {
				if (key in o) {
					o = o[key];
					key = keys[i + 1];
				} else return s;
			}
			return o;
		}
		return key in obj ? obj[key] : s;
	});
};
String.prototype.format = function() {
	var args = arguments, l = args.length;
	if (l > 0) {
		return this.replace(/\$(\d)/g, function(s, k) {
			return args[k - 1] == undefined ? '' : args[k - 1];
		});
	} else return this;
};