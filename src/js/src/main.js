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
	// computed: {
	// 	isInProgress: function(d) {
	// 		var t = dateBuilder.newDate(d).isToday();
	// 		return t ? "is happening today" : "happening in a few days";
	// 	}
	// },
	mounted() {
			getEvents()
			.then(events => {
				events.forEach(event => {
					var db = dateBuilder().newDate(event.Date);
					event.Date = db.toLongDateString();		//dateBuilder().newDate(event.Date).toLongDateString();
					event.IsActive = !db.hasPast();
					//console.log(`event.IsActive = ${db.hasPast()}`);
					this.rides.push(event);
				});
			});
		}
});