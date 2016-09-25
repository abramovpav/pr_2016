define(['knockout', "jquery", './storage'], function (ko, $, storage) {
    function DataProviderService() {
        var self = this;

        this.call = function (url, method, successHandler, errorHandler, async, cache, auth) {
            if (auth != false) {
                auth = true;
            }
            var headers = {};
            if (auth && storage.jwtToken) {
                headers.Authorization = 'JWT ' + storage.jwtToken
            }
            $.ajax({
                url: url,
                method: method,
                async: async || true,
                cache: cache || true,
                headers: headers,
                dataType: "json",
                success: successHandler,
                error: errorHandler
            });
        };

        this.post = function (url, successHandler, errorHandler, async, cache, auth) {
            self.call(url, 'post', successHandler, errorHandler, async, cache, auth)
        };

        this.get = function (url, successHandler, errorHandler, async, cache, auth) {
            self.call(url, 'get', successHandler, errorHandler, async, cache, auth)
        }
    }

    return new DataProviderService();
});
