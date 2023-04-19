"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEndpoint = void 0;
const FindWinner_1 = require("./FindWinner");
const GetClientNumber_1 = require("./GetClientNumber");
const PickRandomHand_1 = require("./PickRandomHand");
const SetGameResult_1 = require("./SetGameResult");
const CheckAuth_1 = require("./CheckAuth");
class GameEndpoint {
    static play(request, response) {
        // handler # 0
        const checkAuth = new CheckAuth_1.CheckAuth();
        // handler # 1
        const getClientNumber = new GetClientNumber_1.GetClientNumber();
        // handler # 2
        const pickRandomHand = new PickRandomHand_1.PickRandomHand();
        // handler # 3
        const findWinner = new FindWinner_1.FindWinner();
        // handler # 4
        const setGameResult = new SetGameResult_1.SetGameResult();
        // Defining the chain of actions:
        // handler #0 -> #1
        checkAuth.setNext(getClientNumber);
        // handler #1 -> #2
        getClientNumber.setNext(pickRandomHand);
        // handler #2 -> #3
        pickRandomHand.setNext(findWinner);
        // handler #3 -> #4
        findWinner.setNext(setGameResult);
        // starting the handler #1 action
        getClientNumber.handle(request, response);
    }
}
exports.GameEndpoint = GameEndpoint;
//# sourceMappingURL=GameEndPoint.js.map