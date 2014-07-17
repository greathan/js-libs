
!function($) {
	
	'use strict';

	var $win = $(window);

	var started = false;

	$.fn.scroll_loading = function(opts) {


		if (typeof opts == 'string') {

			var o = this.data('scroll_loading');

			var action = o.actions[opts];

			action && action();

			return;

		}

		var opts = $.extend({
			check: function() {
				return true;
			},
			callback: function() {
				console.log('doing');
			}
		}, opts);

		var self = this;


		var pos = {height: $win.height(), scroll_top: $win.scrollTop()};


		var actions = {


			start: function() {
				console.log('start', started)
				if (started) return;
				$win
					.on('scroll.scroll_loading', events.scroll)
					.on('resize.scroll_loading', events.resize);

				started = true;

				check();

			},

			stop: function() {

				if (!started) return;

				$win.off('.scroll_loading');

				started = false;

			}


		};

		var events = {

			scroll: function() {

				pos.scroll_top = $win.scrollTop();

				check();


			},

			resize: function() {

				pos.height = $win.height();

				check();


			}

		};


		function check() {

			if (pos.scroll_top + pos.height > self.offset().top + self.height() && opts.check()) {

				actions.stop();

				setTimeout(function() {
					opts.callback.call(self);
				}, 500);
				

			}

		}

		var obj = {
			actions: actions,
			events: events
		};

		this.data('scroll_loading', obj);

		actions.start();

		return this;


	};


}(jQuery);
