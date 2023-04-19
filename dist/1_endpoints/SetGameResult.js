"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetGameResult = void 0;
const Html_1 = require("../2_domain_services/Html");
const BaseHandler_1 = require("./BaseHandler");
const SingleLine_1 = require("../2_domain_services/SingleLine");
// Returns the result of the game
class SetGameResult extends BaseHandler_1.BaseHandler {
    handle(request, response) {
        console.debug("SetGameResult handler...");
        const value = super.getGame().getGameResult();
        // When its launched it makes a choice of strategy
        let ds = new Html_1.Html(); // default
        if (process.env.STRATEGY === '1') {
            ds = new SingleLine_1.SingleLine();
        }
        // response need to be ds
        response.status(200).send(super.getGame().displayResultInOneLine(value));
    }
}
exports.SetGameResult = SetGameResult;
//# sourceMappingURL=SetGameResult.js.map