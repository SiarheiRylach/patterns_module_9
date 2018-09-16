'use strict';

const AuthorizedAbstractPage = require('../master/authorized.page');
const HomePageGuest = require('./home.page.guest');

class HomePageAuthorized extends AuthorizedAbstractPage(HomePageGuest) {
    constructor() {
        super();
    };

}

module.exports = HomePageAuthorized;