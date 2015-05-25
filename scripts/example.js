/**
 * Created by Rick on 5/22/15.
 */
define(["require", "exports"], function (require, exports) {
    var Example = (function () {
        function Example(painting) {
            this.fPainting = painting;
        }
        Example.prototype.toString = function () {
            return this.fPainting;
        };
        return Example;
    })();
    exports.Example = Example;
});
//# sourceMappingURL=example.js.map