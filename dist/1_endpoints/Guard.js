"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
const Session_1 = require("./Session");
const MAXNUMBEROFPLAYS = 5;
class Guard {
    static hasSession(request) {
        const token = request.cookies.tokenKey;
        if (token) {
            console.debug("The user: " + Session_1.Session.getUserName(token) + "can play ");
            return true;
        }
        return false;
    }
    static canContinue(request) {
        const token = request.cookies.tokenKey;
        // todo
        return false;
    }
}
exports.Guard = Guard;
//# sourceMappingURL=Guard.js.map