define(function (require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore'),
        menu = require('app/models/menus'),
        tpl = require('text!app/templates/Menu.html');


    var menus = [];
    var m = new menu();
    m.Name = "Home";
    m.DisplayName = "Home";
    m.Link = "";
    m.ClassName = "active";
    m.IconsName = "";
    menus.push(m);

    var m1 = new menu();
    m1.Name = "Contact";
    m1.DisplayName = "Contact";
    m1.Link = "#contact";
    m1.ClassName = "active";
    m.IconsName = "";
    menus.push(m1);
    var template=_.template(tpl,menus);
    console.log(template);
    var menuview = Backbone.View.extend({
        el: "#navbar",
        model: menus,
        initialize: function () {
            this.render();
        },
        template:_.template(tpl),
        render: function () {
            var html = "<ul class='nav navbar-nav'>";
            for (var i = 0; i < this.model.length; i++) {
                if (i == 0) {
                    html += "<li class='active'><a href='" + this.model[i].Link + "'>" + this.model[i].DisplayName + "</a></li>";
                } else {
                    html += "<li><a href='" + this.model[i].Link + "'>" + this.model[i].DisplayName + "</a></li>";
                }
            }
            html += "</ul>";
            this.$el.html(template({menus:this.model}));
            return this;
        },
        events: {
            "click .navbar-nav > li > a": "changeactiveclass"
        },
        changeactiveclass: function (event) {
            $("ul.navbar-nav > li").each(function (e) {
                $(this).removeClass('active');
            });
            var li = $(event.currentTarget.parentElement);
            li.addClass('active');
        }
    });
    return menuview;
})