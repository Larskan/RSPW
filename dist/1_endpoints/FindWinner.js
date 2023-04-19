"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindWinner = void 0;
const BaseHandler_1 = require("./BaseHandler");
// Finds the winner
class FindWinner extends BaseHandler_1.BaseHandler {
    handle(request, response) {
        console.debug("FindWinner handler...");
        const result = super.getGame().evaluate();
        super.getGame().setGameResult(result);
        super.getNext().handle(request, response);
    }
}
exports.FindWinner = FindWinner;
//# sourceMappingURL=FindWinner.js.map