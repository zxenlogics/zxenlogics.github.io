import { onReady } from './utils';
import { getEvents } from './utils';

onReady(function () {
	// var elems = document.querySelectorAll('.tooltipped');
	// var instances = M.Tooltip.init(elems, options);

	console.log('[onReady]');
});

var app = new Vue({
	el: '#app',
	data: {
		title: 'Summer 2018 Rides',
		rides: []
	},
	mounted() {
			// fetch("https://zxenlogics.github.io/src/events.json")
			// .then(response => {
			// 	return response.json();                            
			// })
			getEvents()
			.then(events => {
				events.forEach(event => {
					this.rides.push(event);
				});
			});
		}
});