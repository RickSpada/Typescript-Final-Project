/**
 * Created by Rick on 5/25/15.
 */
define(["require", "exports"], function (require, exports) {
    var Renderer = (function () {
        function Renderer() {
        }
        Renderer.prototype.renderPainters = function (painters) {
            var painterSelect = document.getElementById('FamousPainter');
            painters.items.forEach(function (painter) {
                var opt = document.createElement('option');
                opt.setAttribute('title', painter.fName);
                opt.innerHTML = painter.fName;
                painterSelect.appendChild(opt);
            });
        };
        Renderer.prototype.renderPainter = function (painter) {
            var styleEl = document.getElementById('PainterStyle');
            styleEl.innerHTML = painter.fStyle;
            this.renderExamples(painter);
        };
        Renderer.prototype.renderExamples = function (painter) {
            var examplesEl = document.getElementById('Examples');
            examplesEl.innerHTML = '<ul><li>' + painter.fExamples.join('</li><li>') + '</li></ul>';
        };
        return Renderer;
    })();
    exports.Renderer = Renderer;
});
/*

<ul>
    <li>Coffee</li>
<li>Tea</li>
<li>Milk</li>
</ul>
*/
//# sourceMappingURL=renderer.js.map