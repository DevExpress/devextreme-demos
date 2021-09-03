$(function(){
    var formatCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format;

    $("#gallery").dxGallery({
        dataSource: gallery,
        height: 440,
        width: "100%",
        loop: true,
        showIndicator: false,
        itemTemplate: function (item) {
            var result = $("<div>");
            $("<img>").attr("src", item.Image).appendTo(result);
            $("<div>").addClass("item-price").text(formatCurrency(item.Price, "USD")).appendTo(result);
            $("<div>").addClass("item-address").text(item.Address + ", " + item.City + ", " + item.State).appendTo(result);
            return result;
        }
    });
});