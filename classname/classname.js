var ClassName = {
	has: function(el, cls){
		return el.className.split('\s+').indexOf(cls) >= 0;
	},
	add: function(el, cls){
		if (!this.has(el, cls)) {
			var arr = el.className.split('\s+');
			arr.push(cls);
			el.className = arr.join(' ');
		}
	},
	remove: function(el, cls){
		if (this.has(el, cls)) {
			var arr = el.className.split('\s+');
			arr.splice(arr.indexOf(cls), 1);
			el.className = arr.join(' ');
		}
	},
	toggle: function(el, cls){
		el.className =
			this.has(el, cls) ?
			this.add(el, cls) :
			this.remove(el, cls);
	}
};