define(["knockout", "jquery", "crossroads", "hasher", "./user-roles", './auth-service'], function (ko, $, crossroads, hasher, userRoles, authService) {

    // This module configures crossroads.js, a routing library. If you prefer, you
    // can use any other routing library (or none at all) as Knockout is designed to
    // compose cleanly with external libraries.
    //
    // You *don't* have to follow the pattern established here (each route entry
    // specifies a 'page', which is a Knockout component) - there's nothing built into
    // Knockout that requires or even knows about this technique. It's just one of
    // many possible ways of setting up client-side routes.
    var self = this;

    return new Router({
        routes: [
            { url: '',             params: { page: 'home-page' }, role: userRoles.roles.public, regExpr:  new RegExp('^$')},
            //{ url: 'login',        params: { page: 'login-page' }, role: userRoles.roles.public, regExpr:  new RegExp('^login$')},
            { url: 'new',          params: { page: 'new-post-page' }, role: userRoles.roles.user, regExpr:  new RegExp('^new$')},
            { url: 'about',        params: { page: 'about-page' }, role: userRoles.roles.public, regExpr: new RegExp('^about$') },
            { url: 'users',        params: { page: 'users-page' }, role: userRoles.roles.user, regExpr: new RegExp('^users$') },
            { url: 'user/{id}',    params: { page: 'user-page' }, role: userRoles.roles.user, regExpr: new RegExp('^user/\\d+$') }
        ],
        defaultRoute: ''
    });

    function Router(config) {
        var currentRoute = this.currentRoute = ko.observable({});

        ko.utils.arrayForEach(config.routes, function(route) {
            crossroads.addRoute(route.url, function(requestParams) {
                currentRoute(ko.utils.extend(requestParams, route.params));
                $(document).foundation();
            });
        });

        activateCrossroads(config);
    }

    function activateCrossroads(config) {
        function parseHash(newHash, oldHash) {
            var route = ko.utils.arrayFirst(config.routes, function(route) {
                return newHash.search(route.regExpr) == 0;
            });
            console.log(newHash, oldHash, route);

            if (!checkAuth(route)) {
                crossroads.parse(config.defaultRoute);
                hasher.setHash(config.defaultRoute);
                return;
            }
            crossroads.parse(newHash);
        }
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    }

    function checkAuth(route) {
        return route && authService.user().role >= route.role;
    }
});