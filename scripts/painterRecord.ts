/**
 * Created by Rick on 5/22/15.
 */

import PainterExample = require('example');

export class PainterRecord {
    public fName: string;
    public fStyle: string;
    public fExamples: PainterExample.Example[];

    constructor(name: string, style: string, examples: PainterExample.Example[]) {
        this.fName = name;
        this.fStyle = style;
        this.fExamples = examples;
    }
}

export class PainterRecords {
    items: PainterRecord[] = [];
}