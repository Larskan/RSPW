"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickRandomHand = void 0;
const BaseHandler_1 = require("./BaseHandler");
// Sets the computerHand
class PickRandomHand extends BaseHandler_1.BaseHandler {
    handle(request, response) {
        console.debug("PickRandomHand handler...");
        super.getGame().setFairRandomComputerHand();
        console.debug("The generated computerhand = " + super.getGame().getComputerHand());
        super.getNext().handle(request, response);
    }
}
exports.PickRandomHand = PickRandomHand;
//# sourceMappingURL=PickRandomHand.js.map