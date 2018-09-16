'use strict';

const HomePageAuthorized = require('./home.page.authorized');
const HomePageGuest = require('./home.page.guest');

class HomeFactory {
    static getHomePage(type) {
        switch (type) {
            case "Guest": return new HomePageGuest();
            case "Authorized": return new HomePageAuthorized;
        }
    }
}

module.exports = HomeFactory;
