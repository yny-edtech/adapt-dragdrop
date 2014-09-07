/*
* adapt-component
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Kevin Jones <him@kevincjones.co.uk>
*/

define(["coreViews/componentView", "coreJS/adapt","./jquery-ui.js","./jquery.ui.touch-punch.js"], function(ComponentView, Adapt, JQueryUI, touchPunch) {

    var DragDrop = ComponentView.extend({
        
        postRender: function() {
            console.log("rendering");

            // IMPORTANT! 
            // Both of the following methods need to be called inside your view.

            // Use this to set the model status to ready. 
            // It should be used when telling Adapt that this view is completely loaded.
            // This is sometimes used in conjunction with imageReady.
            this.setReadyStatus();

            // Use this to set the model status to complete.
            // This can be used with inview or when the model is set to complete/the question has been answered.
            this.setCompletionStatus();
        }
        
    });
    
    Adapt.register("dragdrop", DragDrop);
    
});