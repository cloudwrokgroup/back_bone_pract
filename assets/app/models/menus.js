var Menu=Backbone.Model.extend({
    defaults:{
        Name:"",
        DisplayName:"",
        Link:"",
        ClassName:"",
        IconsName:""
    },
    initialize:function(){

    },
    constructorl:function(attribute,options){
        alert();
        console.log(attribute);
        console.log(options);
        Backbone.Model.apply(this,arguments);
    }
});
