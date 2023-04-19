"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginEndPoint = void 0;
const Session_1 = require("./Session");
class LoginEndPoint {
    static evaluate(request, response) {
        try {
            // action 0 removes previous tokens
            if (request.cookies) {
                request.cookies.tokenKey = null;
            }
            // action 1
            const userName = request.params.uid;
            // action 2
            let accepted = false; // You arent accepted yet
            if (userName === process.env.USER1 || userName === process.env.USER2) {
                accepted = true;
            }
            else {
                return response.status(403).json("Error, this user is not authorized");
            }
            // action 3,4,5
            if (accepted) {
                const token = request.cookies.tokenKey;
                // Session.getUserName(token);
                if (token) {
                    // response.cookie('tokenKey',Session.updateCounter(token));
                }
                else {
                    const thisToken = Session_1.Session.generateToken(userName);
                    console.debug(Session_1.Session.getUserName(thisToken));
                    response.cookie('tokenkey', thisToken);
                }
                return response.status(200).json("The user is logged in");
            }
        }
        catch (e) {
            console.error(e);
        }
    }
}
exports.LoginEndPoint = LoginEndPoint;
//# sourceMappingURL=LoginEndPoint.js.map