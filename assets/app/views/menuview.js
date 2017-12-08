var menus = [];

var menu = new Menu();
menu.Name = "Home";
menu.DisplayName = "Home";
menu.Link = "";
menu.ClassName = "active";
menu.IconsName = "";
menus.push(menu);

var menu1 = new Menu();
menu1.Name = "Contact";
menu1.DisplayName = "Contact";
menu1.Link = "#";
menu1.ClassName = "active";
menu1.IconsName = "";
menus.push(menu1);
var menuView = Backbone.View.extend({
    el: "#navbar",
    model: menus,
    initialize: function () {
        this.render();
    },
    template: "",
    render: function () {
        var html = "<ul class='nav navbar-nav'>";
        for (var i = 0; i < this.model.length; i++) {
            if (i == 0) {
                html += "<li class='active'><a href='"+this.model[i].Link+"'>"+this.model[i].DisplayName+"</a></li>";
            } else {
                html += "<li><a href='"+this.model[i].Link+"'>"+this.model[i].DisplayName+"</a></li>";
            }
        }
        html += "</ul>";
        this.$el.html(html);
        return this;
    }
});
var menuView = new menuView();

