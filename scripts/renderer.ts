/**
 * Created by Rick on 5/25/15.
 */

import PainterRecord = require('painterRecord');
import PainterExample = require('example');

export class Renderer {
    renderPainters(painters) {
        var painterSelect = document.getElementById('FamousPainter');
        painters.items.forEach((painter) => {
            var opt = document.createElement('option');
            opt.setAttribute('title', painter.fName);
            opt.innerHTML = painter.fName;
            painterSelect.appendChild(opt);
        });
    }

    renderPainter(painter: PainterRecord.PainterRecord) {
        var styleEl = document.getElementById('PainterStyle');
        styleEl.innerHTML = painter.fStyle;

        this.renderExamples(painter);

    }

    renderExamples(painter: PainterRecord.PainterRecord) {
        var examplesEl = document.getElementById('Examples');
        examplesEl.innerHTML = '<ul><li>' + painter.fExamples.join('</li><li>') + '</li></ul>';
    }
}
/*

<ul>
    <li>Coffee</li>
<li>Tea</li>
<li>Milk</li>
</ul>
*/
