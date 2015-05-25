//Add your initialization logic here

// Your solution should allow the user to select an artist name and, once selected,
// show the user information about that artist. At minimum, the information you show
// should include the style the artist worked in and examples of that artists paintings.
// This information is found in the JSON file included with the project.

import PainterLoader = require('painterLoader');
import PainterRecord = require('painterRecord');
import PainterRenderer = require('renderer');

export var famousPaintersList: PainterRecord.PainterRecords;
export var painterRenderer = new PainterRenderer.Renderer();

var painterSelect = (<HTMLSelectElement> document.getElementById('FamousPainter'));

painterSelect.onchange = () => loadPainters();
var loader = new PainterLoader.PainterLoader('./JSON/famousPainters.json');
loader.load();

function loadPainters() {
    var el = (<HTMLSelectElement> document.getElementById('FamousPainter'));
    try {
        //Find selected item by name
        var famousPainter = famousPaintersList.items.filter(
                item => item.fName === el.value
        ).reduce(
            //return the item
            item => new PainterRecord.PainterRecord(
                el.value,
                item.fStyle,
                item.fExamples
            ));
        painterRenderer.renderPainter(famousPainter);
    }
    catch (ex) {
        alert(ex.message)
    }
}
