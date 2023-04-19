"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Html = void 0;
class Html {
    display(gameResult) {
        let line = "<html<body><h2>";
        line = line + gameResult;
        line = line + "</h2></body></html>";
        return line;
    }
}
exports.Html = Html;
//# sourceMappingURL=Html.js.map