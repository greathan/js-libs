var ClassName = {
	has: function(el, cls){
		return new RegExp("\\b" + cls + "\\b").test(el.className);
	},
	add: function(el, cls){
		if (!this.has(el, cls)) el.className += ' ' + cls;
	},
	remove: function(el, cls){
		var reg = new RegExp("\\b" + cls + "\\b");
		if (this.has(el, cls))
			el.className = el.className.replace(reg, '');
	},
	toggle: function(el, cls){
		el.className =
			this.has(el, cls) ?
			this.add(el, cls) :
			this.remove(el, cls);
	}
};