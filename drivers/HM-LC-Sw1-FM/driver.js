'use strict';

const Homey = require('homey');
const Driver = require('../../lib/driver.js');

class HomematicDriver extends Driver {

    onInit() {
        super.onInit();
        this.capabilities = [
            'onoff'
        ]
        this.homematicType = 'HM-LC-Sw1-FM'
        this.log(this.homematicType, 'has been inited');
    }


}

module.exports = HomematicDriver;