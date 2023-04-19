"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const expiresIn = '2h';
const MAXCOUNT = 10;
class Session {
    // Create a token (with JWT) setting the userName into the token
    static generateToken(userName) {
        const token = jsonwebtoken_1.default.sign({ 'userName': userName }, process.env.TOKEN_SECRET, { expiresIn });
        console.debug("The token generated (encrypted):" + token);
        return token;
    }
    static getUserName(token) {
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        console.debug("decodedToken:" + decodedToken);
        return decodedToken.userName;
    }
    static updateCounter(token) {
        return "TODO";
    }
}
exports.Session = Session;
//# sourceMappingURL=Session.js.map