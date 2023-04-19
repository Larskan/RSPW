"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAuth = void 0;
const BaseHandler_1 = require("./BaseHandler");
const Guard_1 = require("./Guard");
// Controls that the user is authorized to play
class CheckAuth extends BaseHandler_1.BaseHandler {
    handle(request, response) {
        console.debug("CheckAuth handler...");
        if (Guard_1.Guard.hasSession) {
            super.getNext().handle(request, response);
        }
    }
}
exports.CheckAuth = CheckAuth;
//# sourceMappingURL=CheckAuth.js.map