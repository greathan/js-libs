String.prototype.toRegExpString = function(){
	return this.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
};
String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g, '');
};