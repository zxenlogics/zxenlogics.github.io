var appSettings = function() {

    var config = {
        fadeIn: 600,
        progressBarErrorClass: 'progress-bar-danger',
        statusText401: 'Unauthorized',
        statusText404: 'Not Found',
        statusText500: 'Internal Server Error',
        timeOut_30_seconds: 30000
    }

    var urls = {
        cyclingEvents: 'https://zxenlogics.github.io/src/events.json',
    }

    /**
     * @desc Returns a reference to the specified html element
     */
    var elm = {
        progress: document.querySelector('.progress'),
        progressBar: document.querySelector('.progress-bar')
    }

    return {
        config: config,
        urls: urls,
        elm: elm
    }
}();

export { appSettings }