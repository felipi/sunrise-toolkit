var STMotionBlur = {
    objects: [],
    refresh: null,

    applyToObject: function(jobject, options){
        if(options == undefined){
            options = {
                iterations: 5
            };
        }

        last = {x: 0, y: 0};
        current = {x:0, y:0};

        var container = $("<div class='stfx_container' />");
        for(i = 0; i < options.iterations;i++){
            jobject.clone().appendTo(container);
        }
        container.insertAfter(jobject);

        savedObject = {target: jobject,
                       fxcontainer: container,
                       last_position: last,
                       current_position: current,
                       options: options};
        this.objects.push(savedObject);

        if(this.refresh==null){
                this.refresh = setInterval(STMotionBlur.refreshObjects, 100);
        }
    },

    refreshObjects: function(){
        for(i=0; i < STMotionBlur.objects.length; i++){
                object = STMotionBlur.objects[i];
                object.current_position.x = parseInt(object.target.css("left"))//.replace("px","");
                object.current_position.y = parseInt(object.target.css("top"))//.replace("px","");

                deltax = object.last_position.x - object.current_position.x;
                console.log(deltax);
                var subobjects = object.fxcontainer.find(".stfx_container").children();

                $(subobjects[0]).css("left", 20);

                object.last_position = jQuery.extend(true, {}, object.current_position);
        }
    }

}
