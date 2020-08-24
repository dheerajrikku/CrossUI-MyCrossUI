// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3")
                .setDirtyMark(false)
                .setLeft("4.571428571428571em")
                .setTop("9.904761904761905em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Number Input")
                .setType("number")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setDirtyMark(false)
                .setLeft("25.142857142857142em")
                .setTop("9.904761904761905em")
                .setCaption("Button")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button6")
                .setDirtyMark(false)
                .setLeft("12.952380952380953em")
                .setTop("25.904761904761905em")
                .setWidth("44.19047619047619em")
                .setCaption("Status Button")
                .setType("status")
            );
            
            append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"xui_ui_progressbar2")
                .setDirtyMark(false)
                .setLeft("21.333333333333332em")
                .setTop("32.76190476190476em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});