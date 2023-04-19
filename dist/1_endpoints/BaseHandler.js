"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseHandler = void 0;
const Game_1 = require("../3_domain/Game");
class BaseHandler {
    getGame() {
        return BaseHandler.game; // Cant use this.game because its static
    }
    getNext() {
        return this.next;
    }
    setNext(h) {
        this.next = h;
    }
}
exports.BaseHandler = BaseHandler;
BaseHandler.game = new Game_1.Game();
//# sourceMappingURL=BaseHandler.js.map