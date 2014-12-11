

+function($) {

	var ROOT_KEY = 'J-sug';

	$.suggest.ROOT_KEY = ROOT_KEY;

	/**
	 *
	 */
	var key = {
		"UP": 38,
		"DOWN": 40,
		"ENTER": 13,
		"ESC": 17,
		"ALT": 18,
		"TAB": 9
	};

	var def_cfg = {

	};


	$.fn.suggest = function(config) {

		

	};




	var KEY = [38, 40, 13, 27, 18, 9];

	$.fn.suggest = function(config) {

		return this.each(function() {

			var $this = $(this);

			var holder = $('<div class="mail_sug" style="display: none;"></div>');


			holder.on('mouseover', 'li a', function() {

				var active = holder.find('.hover');

				if (this != active.get(0)) active.removeClass('hover');

				$(this).addClass('hover');

			}).on('mouseout', 'li a', function() {
				$(this).removeClass('hover');
			}).on('mousedown', 'li a', function(evt) {
				evt.preventDefault();

				var index = $(this).data('index'),
					data = $this.data('sug-data')[index];

				if (!data) return;

				$this.val(data.code).jvalid();
				holder.hide();


			});


			$this.parent().after(holder);

			$this.focus(function() {

				var val = $this.val(),
					list = matcher(val, config.data);

				$this.data('sug-data', list);

				showList($this, holder, list);


			}).keyup(function(evt) {

				var key = evt.keyCode;

				if ($.inArray(key, KEY) > -1) return;

				var val = $this.val(),
					list = matcher(val, config.data);

				$this.data('sug-data', list);

				showList($this, holder, list);

			}).blur(function() {
				holder.hide();
			}).keydown(function(evt) {

				var key = evt.keyCode;


		        if ((key === 40 || key == 38) && !holder.is(':visible')) {
		            holder.show();
		            return;
		        }

				var elements = holder.find('a'),
					cur = elements.filter('.hover');

				switch(key) {
					case 38:
					case 40:
						var index = elements.index(cur);
						index = key == 38 ? index - 1 : index + 1;

						if (index >= elements.length) index = 0;
           				if (index < 0) index = elements.length - 1;

						cur.removeClass('hover');

						cur = elements.eq(index);

						if (cur.length > 0) {
							var index = cur.data('index'),
								data = $this.data('sug-data')[index];
							if (data) {

								$this.val(data.code);

								cur.addClass('hover');
							}
							
						}

						evt.preventDefault();
						break;
					case 13:
			            //   enter
			            //回车时设置值
			            if (cur.length > 0) {
			            	var index = cur.data('index'),
								data = $this.data('sug-data')[index];
							if (data) {
			                	$this.val(data.code).jvalid();
			                	holder.hide();
			                }
			            }
			            evt.preventDefault();
			        case 27:
			            //   esc
			            holder.hide();
			            break;
			        case 18:
			            // alt
			        case 9:
			            //   tab
			            break;

				}
			})

		});
	};

	function showList(input, holder, list) {

		var val = input.val(),
			reg = new RegExp('(^' + val + ')', 'i');

		holder.html(function() {

			var s = ['<ul>'];

			if (!list.has) {
				return '<div class="no_found hover" style="padding-left:10px;width:256px;">' + list[0].name +'</div>';
			}

			$.each(list, function(i, item) {
				s.push('<li><a tabindex="-1" data-index="', i, '" href="javascript:;"><span style="float:right;padding-right:8px;">',
					item.code.replace(reg, '<span style="color:#FF0078">$1</span>'),
					'</span>',
					item.zh.replace(reg, '<span style="color:#FF0078">$1</span>'),
					item.en.replace(reg, '<span style="color:#FF0078">$1</span>'),
					'</a></li>');
			});
			s.push('</ul>');

			return s.join('');

		}).show().find('a:eq(0)').addClass('hover');


	}


	function matcher(val, data) {

		var r = [];

		if (val) {

			var reg = new RegExp('^' + val, 'i');

			$.each(data, function(i, item) {

				if (r.length == 8) return false;

				if (reg.test(item.zh) || reg.test(item.en) || reg.test(item.code)) {
					r.push(item);
				}

			});

		} else {

			var code_list = ["86", "852", "1", "44", "65", "61", "82", "81"];


			$.each(data, function(i, item) {

				var pos = $.inArray(item.code, code_list);
				if (pos > -1) {
					r[pos] = item;
				}
			});

		}

		if (!r.length) {
			r.push({
				name: '对不起，找不到<span style="color:#FF0078">' + val + '</span><br />请重新输入'
			});
			r.has = false;
		} else {
			r.has = true;
		}

		return r;

	}

	
}(jQuery);