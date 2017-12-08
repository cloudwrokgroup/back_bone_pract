var AppRouter = Backbone.Router.extend({
    routes: {
        "": "home"
    },
    initialize: function () {

    },
    home: function () {

    }
});
app = new AppRouter();
Backbone.history.start();