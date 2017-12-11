define(
    function (require) {
        "use strict";
        var $ = require('jquery'),
            Backbone = require('backbone'),
            menuview = require('app/views/Menuview');

        var AppRouter = Backbone.Router.extend({
            routes: {
                "": "home"
            },
            initialize: function () {
                var menu = new menuview();
                menu.render();
            },
            home: function () {

            }
        });
        return AppRouter;
    });