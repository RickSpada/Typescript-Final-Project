//Add your initialization logic here
define(["require", "exports", 'painterLoader', 'painterRecord', 'renderer'], function (require, exports, PainterLoader, PainterRecord, PainterRenderer) {
    exports.famousPaintersList;
    exports.painterRenderer = new PainterRenderer.Renderer();
    var painterSelect = document.getElementById('FamousPainter');
    painterSelect.onchange = function () { return loadPainters(); };
    var loader = new PainterLoader.PainterLoader('./JSON/famousPainters.json');
    loader.load();
    function loadPainters() {
        var el = document.getElementById('FamousPainter');
        try {
            //Find selected item by name
            var famousPainter = exports.famousPaintersList.items.filter(function (item) { return item.fName === el.value; }).reduce(
            //return the item
            function (item) { return new PainterRecord.PainterRecord(el.value, item.fStyle, item.fExamples); });
            exports.painterRenderer.renderPainter(famousPainter);
        }
        catch (ex) {
            alert(ex.message);
        }
    }
});
//# sourceMappingURL=app.js.map