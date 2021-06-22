(function (factory) {
    if (window.Promise && window.System) {
        return Promise.all([
            System.import("devextreme/ui/tree_list")
        ]).then(function (args) {
            return factory(args[0]);
        });
    } else {
        return factory(DevExpress.ui.dxTreeList);
    }
})(function (dxTreeList) {
    return new Promise(function(resolve){
        var instance = dxTreeList.getInstance(document.getElementById("treelist"));
        instance.option("onContentReady", function() {
            resolve();
        });

        instance.option("dataSource", {
            load: function (options) {
                return $.ajax({
                    url: "https://js.devexpress.com/Demos/Mvc/api/treeListData",
                    data: { parentIds: options.parentIds.join(",") }
                })
            }
        });
    });
}); 