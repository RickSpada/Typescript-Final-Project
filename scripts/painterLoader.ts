/**
 * Created by Rick on 5/21/15.
 */
///<reference path="typings/jquery.d.ts" />
///<reference path="typings/require.d.ts" />

import App = require('app');
import PainterRecord = require('painterRecord');
import PainterExample = require('example');

export class PainterLoader {

    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    load() {
        $.getJSON(this.url,(data) => {
            this.mapData(data);
        });
    }

    //
    // success function passed to getJSON that populates the painters menu list
    // with the names from each JSON record
    //
    mapData(data) {
        if (data) {
            var painters: any[] = data.famousPainters;

            App.famousPaintersList = new PainterRecord.PainterRecords();
            painters.forEach((painter) => {
                var painterRec = new PainterRecord.PainterRecord(
                    painter.name,
                    painter.style,
                    this.getExamples(painter)
                );

                App.famousPaintersList.items.push(painterRec);
            });

            //Render the categories into the select
            App.painterRenderer.renderPainters(App.famousPaintersList);
        }
        else {
            PainterLoader.loaderError();
        }
    }

    getExamples(painter) : PainterExample.Example[] {
       return painter.examples.map((example) => {
            return new PainterExample.Example(example);
        });
    }

    static loaderError() {
        console.log("Error loading data");
    }
}
