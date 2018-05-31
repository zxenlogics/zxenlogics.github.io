import { appSettings } from './appSettings';

/**
 * @desc Pure js alternative to the jQuery.ready function
 * @param {any} fn Function to execute on DOM loaded
 */
export function onReady(fn) {
    //$(fn);
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
} 


export function getEvents() {
	return fetch(appSettings.urls.cyclingEvents)
		.then(response => {
			return response.json();                            
		});
}