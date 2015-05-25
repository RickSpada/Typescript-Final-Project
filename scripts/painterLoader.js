/**
 * Created by Rick on 5/21/15.
 */
///<reference path="typings/jquery.d.ts" />
///<reference path="typings/require.d.ts" />
define(["require", "exports", 'app', 'painterRecord', 'example'], function (require, exports, App, PainterRecord, PainterExample) {
    var PainterLoader = (function () {
        function PainterLoader(url) {
            this.url = url;
        }
        PainterLoader.prototype.load = function () {
            var _this = this;
            $.getJSON(this.url, function (data) {
                _this.mapData(data);
            });
        };
        //
        // success function passed to getJSON that populates the painters menu list
        // with the names from each JSON record
        //
        PainterLoader.prototype.mapData = function (data) {
            var _this = this;
            if (data) {
                var painters = data.famousPainters;
                App.famousPaintersList = new PainterRecord.PainterRecords();
                painters.forEach(function (painter) {
                    var painterRec = new PainterRecord.PainterRecord(painter.name, painter.style, _this.getExamples(painter));
                    App.famousPaintersList.items.push(painterRec);
                });
                //Render the categories into the select
                App.painterRenderer.renderPainters(App.famousPaintersList);
            }
            else {
                PainterLoader.loaderError();
            }
        };
        PainterLoader.prototype.getExamples = function (painter) {
            return painter.examples.map(function (example) {
                return new PainterExample.Example(example);
            });
        };
        PainterLoader.loaderError = function () {
            console.log("Error loading data");
        };
        return PainterLoader;
    })();
    exports.PainterLoader = PainterLoader;
});
//# sourceMappingURL=painterLoader.js.map