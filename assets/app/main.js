/*var AppRouter = Common.AP.Router.extend({
    routes: {
        "": "home"
    },
    initialize: function () {

    },
    home: function () {

    }
});*/
//app = new AppRouter();
//Common.AP.history.start();

requirejs.config({
    'baseUrl':'assets',
    'paths':{
        'jquery':'js/jquery.min',
        'underscore':'js/underscore-min',
        'backbone':'js/backbone-min',
        'bootstrap':'js/bootstrap.min',
        'jquery_hotkeys':'js/jquery.hotkey',
        'backbone_hotkeys':'js/backbone-hotkeys',
        'text':'js/require-text-2.1.20',
    },
    'shim': {
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        }
    }
});

require(['jquery','backbone','app/router'],function($,Backbone,AppRouter){
    var router= new AppRouter();
    Backbone.history.start();
})