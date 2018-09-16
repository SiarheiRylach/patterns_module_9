'use strict';

const Authorized = Page => class extends Page {
    constructor() {
        super();
        this['Menu'] = element(by.css('.user_menu'));
        this['Avatar'] =  element(by.css('#avatar'));
    };

};

module.exports = GuestPage;