define(['knockout', "jquery", './storage'], function (ko, $, storage) {
    function DataProviderService() {
        var self = this;

        this.call = function (url, method, data, successHandler, errorHandler, async, cache, auth) {
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
                contentType: "application/json",
                data: data,
                async: async || true,
                cache: cache || true,
                headers: headers,
                dataType: "json",
                success: successHandler,
                error: errorHandler
            });
        };

        this.post = function (url, data, successHandler, errorHandler, async, cache, auth) {
            self.call(url, 'post', data, successHandler, errorHandler, async, cache, auth)
        };

        this.get = function (url, successHandler, errorHandler, async, cache, auth) {
            self.call(url, 'get', null, successHandler, errorHandler, async, cache, auth)
        }
    }

    return new DataProviderService();
});
