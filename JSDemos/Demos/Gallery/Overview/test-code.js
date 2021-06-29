testUtils.importAnd(() => 'devextreme/ui/gallery', () => DevExpress.ui.dxGallery, function (dxGallery) {
    var i = dxGallery.getInstance(document.getElementById("gallery"));
    i.option("slideshowDelay", 0);
    i.goToItem(0, false);
    i._optionChanged = function() {};
});
