"use strict";
const SeznamMainAbl = require("../../abl/seznam-main-abl.js");

class SeznamMainController {
  init(ucEnv) {
    return SeznamMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return SeznamMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return SeznamMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new SeznamMainController();
