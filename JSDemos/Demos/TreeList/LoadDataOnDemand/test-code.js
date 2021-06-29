testUtils.importAnd(()=>'devextreme/ui/tree_list', ()=>DevExpress.ui.dxTreeList, function (dxTreeList) {    
    return new Promise(function(resolve){
        var instance = dxTreeList.getInstance(document.getElementById("treelist"));
        let timeoutId = setTimeout(resolve, 30000);
        instance.option("onContentReady", function() {
            clearTimeout(timeoutId);
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
