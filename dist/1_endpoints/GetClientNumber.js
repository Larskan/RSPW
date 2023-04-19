"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientNumber = void 0;
const BaseHandler_1 = require("./BaseHandler");
// Reads the choise of the client
class GetClientNumber extends BaseHandler_1.BaseHandler {
    // assignment: There is a minor bug in the code if you try to  play/ggjhgg!! can this be fixed?
    // Option: Typeof check
    handle(request, response) {
        console.debug("GetClientNumber handler...");
        let clientNumber;
        try {
            clientNumber = parseInt(request.params.uid, 10); // radix = 10
        }
        catch (e) {
            response.status(404).json("Error, the value must be an integer");
        }
        if (clientNumber < 0 || clientNumber > 3 || isNaN(clientNumber)) {
            response.status(404).json("Error, choose a value from 0 to 3");
        }
        else {
            super.getGame().setClientHand(clientNumber);
            super.getNext().handle(request, response); // GameEndPoint has which is Next
        }
    }
}
exports.GetClientNumber = GetClientNumber;
//# sourceMappingURL=GetClientNumber.js.map