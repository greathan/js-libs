
$.query = function(key) {

	if (!$.query.cache) {

		var search = decodeURIComponent(location.search.replace('?', ''));
		var s = search.split('&');
		
		var res = {};
		
		$.each(s, function(i, item) {
			
			var t = item.split('=');
			
			res[t[0]] = t[1];
		
		});
		
		$.query.cache = res;
	
	}
	
	return key ? $.query.cache[key] : $.query.cache;
}
