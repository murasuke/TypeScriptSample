"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App;
(function (App) {
    var Talk = /** @class */ (function () {
        function Talk() {
        }
        Talk.GetGreeting = function (now) {
            // return "Hello!";
            if (now.getHours() < 12) {
                return "Hello!";
            }
            else {
                return "Good evening!";
            }
        };
        return Talk;
    }());
    App.Talk = Talk;
})(App = exports.App || (exports.App = {}));
//# sourceMappingURL=app-takl.js.map