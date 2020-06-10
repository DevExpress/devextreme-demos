var orders = new DevExpress.data.CustomStore({
    load: function(loadOptions) {
        var deferred = $.Deferred(),
            args = {};

        if(loadOptions.sort) {
            args.orderby = loadOptions.sort[0].selector;
            if(loadOptions.sort[0].desc)
                args.orderby += " desc";
        }

        args.skip = loadOptions.skip || 0;
        args.take = loadOptions.take || 12;

        $.ajax({
            url: "https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems",
            dataType: "json",
            data: args,
            success: function(result) {
                deferred.resolve(result.items, { totalCount: result.totalCount });
            },
            error: function() {
                deferred.reject("Data Loading Error");
            },
            timeout: 5000
        });

        return deferred.promise();
    }
});