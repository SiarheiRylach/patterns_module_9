'use strict';

const Parent = ClassForInheritance => class extends ClassForInheritance {
    constructor() {
        super();
        this.url = '/parent';
    };

    outputCurrentDate(){
        console.log(new Date());
    }

};

module.exports = Parent;