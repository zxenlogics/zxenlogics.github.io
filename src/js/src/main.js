import { onReady } from './utils';
import { getEvents } from './utils';
import { dateBuilder } from './dateBuilder';

onReady(function () {
	// var elems = document.querySelectorAll('.tooltipped');
	// var instances = M.Tooltip.init(elems, options);

	console.log('[onReady]');
});

var app = new Vue({
	el: '#app',
	data: {
		rides: []
	},
	mounted() {
			getEvents()
			.then(events => {
				events.forEach(event => {
					event.Date = dateBuilder().newDate(event.Date).toLongDateString();
					//console.log(event.Date);
					this.rides.push(event);
				});
			});
		}
});