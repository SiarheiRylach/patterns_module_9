'use strict';

const Ancestor = require('./ancestor');
const Parent = require('./parent');

class Child extends Parent(Ancestor){
    constructor() {
        super();
        this.url = '/child';
    };

    outputAll(){
        super.outputUrl();
        super.outputCurrentDate();
    }

}

module.exports = Child;