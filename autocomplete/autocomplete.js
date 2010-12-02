/**
 * AutoComplete Class
 * @param {Array} data the data of list
 * @param {HTMLElement} input the target element
 * @class
 *
 */

function AutoComplete(data, input){
	this.addEvent(data, input);
}
AutoComplete.prototype = {
	addEvent: function(data, input){
		var _timer, lastV;
		var _hilitedEl = null, _hilitIndex = -1;
		var _matchedItems = [];
		var render = document.createElement('div');
		render.className = 'ac-render';
		render.style.top = input.offsetTop + input.offsetHeight + 'px';
		render.style.left = input.offsetLeft + 'px';
		render.style.display = 'none';
		render.onmouseover = function(e){
			e = window.event || e;
			var el = e.target || e.srcElement;
			if (ClassName.has(el, 'ac-row')) hilit(el, _hilitedEl);
		};
		render.onmousedown = function(e){
			e = window.event || e;
			var el = e.target || e.srcElement;
			if (ClassName.has(el, 'ac-row')) select(input, el);
		};
		document.body.appendChild(render);
		input.onfocus = function(){
			lastV = input.value.trim();
			_timer = setInterval(function(){
				_matchedItems = [];
				var v = input.value.trim();
				if (lastV == v) return;
				if (v) {
					var reg = new RegExp("(\\b"+ v.toRegExpString() + ")", "i");
					for (var i = 0 ; i < data.length; i++) {
						if (reg.test(data[i])) {
							_matchedItems.push(
								'<div class="ac-row" id="acri-'+i+'">' +
								data[i].replace(reg,
									"<b class=\"ac-highlighted\">$1</b>") +
									'</div>');
						}
					}
					render.innerHTML = _matchedItems.join('');
					hilit(render.firstChild);
					_hilitIndex  = 0;
				}
				lastV = v;
				render.style.display = _matchedItems.length ? '' : 'none';
			}, 150);
			
		};
		input.onblur = dismiss;
		input.onkeydown = function(e){
			e = window.event || e;
			var list = render.childNodes, el;
			if (!_timer) this.onfocus();
			switch (e.keyCode) {
				// down
				case 40:
					el = list[++_hilitIndex];
					if (el) hilit(el, _hilitedEl);
					else _hilitIndex = list.length - 1;
					e.preventDefault ? e.preventDefault() : e.returnValue = false;
					break;
				// up
				case 38:
					if (_hilitIndex == 0) _hilitIndex = 1;
					el = list[--_hilitIndex];
					hilit(el, _hilitedEl);
					e.preventDefault ? e.preventDefault() : e.returnValue = false;
					break;
				// enter
				case 13:
					select(this, list[_hilitIndex]);
					e.preventDefault ? e.preventDefault() : e.returnValue = false;
					break;
				// esc
				case 27:
					dismiss();
					break;
			}
		
		};
		function select(input, el){
			input.value = data[el.id.split('-')[1]];
			dismiss();
		}
		function hilit(el){
			_hilitedEl && ClassName.remove(_hilitedEl, 'ac-active');
			el && ClassName.add(el, 'ac-active');
			_hilitedEl = el;
		}
		function dismiss(){
			clearInterval(_timer);
			_timer = null;
			render.style.display = 'none';
		}
	}
};
