/**
 * Created by Rick on 5/22/15.
 */
define(["require", "exports"], function (require, exports) {
    var PainterRecord = (function () {
        function PainterRecord(name, style, examples) {
            this.fName = name;
            this.fStyle = style;
            this.fExamples = examples;
        }
        return PainterRecord;
    })();
    exports.PainterRecord = PainterRecord;
    var PainterRecords = (function () {
        function PainterRecords() {
            this.items = [];
        }
        return PainterRecords;
    })();
    exports.PainterRecords = PainterRecords;
});
//# sourceMappingURL=painterRecord.js.map