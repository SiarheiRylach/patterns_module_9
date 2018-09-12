'use strict';

class Ancestor {
    constructor() {
        this.url = '/ancestor';
    };

    outputUrl(){
        console.log(this.url);
    }

}

module.exports = Ancestor;