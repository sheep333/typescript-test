"use strict";
exports.__esModule = true;
var Foods;
(function (Foods) {
    Foods[Foods["SeaChiken"] = 0] = "SeaChiken";
    Foods[Foods["CatFood"] = 1] = "CatFood";
})(Foods = exports.Foods || (exports.Foods = {}));
var OwnerAction;
(function (OwnerAction) {
    OwnerAction[OwnerAction["Fooding"] = 0] = "Fooding";
    OwnerAction[OwnerAction["Play"] = 1] = "Play";
    OwnerAction[OwnerAction["Ask"] = 2] = "Ask";
})(OwnerAction = exports.OwnerAction || (exports.OwnerAction = {}));
var EatAction;
(function (EatAction) {
    EatAction["Eat"] = "\u3080\u3057\u3083\u3080\u3057\u3083";
    EatAction["OverEat"] = "\u305D\u3093\u306A\u306B\u98DF\u3079\u3089\u308C\u306A\u3044\u306B\u3083";
    EatAction["CanNotEat"] = "\u3061\u3083\u3093\u3068\u3057\u305F\u98DF\u3079\u7269\u3092\u3088\u3053\u3059\u306B\u3083";
})(EatAction = exports.EatAction || (exports.EatAction = {}));
var HungerCondition;
(function (HungerCondition) {
    HungerCondition["Hungry"] = "\u30CF\u30E9\u30D8\u30EA";
    HungerCondition["Ok"] = "\u307E\u3060\u5927\u4E08\u592B";
    HungerCondition["Full"] = "\u304A\u8179\u3044\u3063\u3071\u3044\u306B\u3083";
})(HungerCondition = exports.HungerCondition || (exports.HungerCondition = {}));
var CatAction;
(function (CatAction) {
    CatAction["Fun"] = "\u3054\u308D\u306B\u3083\u30FC\u3093";
    CatAction["Hesitate"] = "\u304E\u3083\u30FC\u30FC\u30FC\u3059";
    CatAction["NoIdea"] = "\u306A\u306B\u304B\u306B\u3083\uFF1F";
})(CatAction = exports.CatAction || (exports.CatAction = {}));
var Cat = (function () {
    function Cat(theName, theNum) {
        this.name = theName;
        this.num = theNum;
        this.point = 0;
    }
    Cat.prototype.play = function () {
        this.point += 10 * this.num;
        return CatAction.Fun;
    };
    Cat.prototype.eat = function (food) {
        if (this.point < 0) {
            return EatAction.OverEat;
        }
        else if (food == Foods.SeaChiken) {
            this.point = 0;
            return EatAction.Eat;
        }
        else if (food == Foods.CatFood) {
            this.point -= 40;
            return EatAction.Eat;
        }
        else {
            return EatAction.CanNotEat;
        }
    };
    Cat.prototype.answer = function () {
        if (this.point >= 60) {
            return HungerCondition.Hungry;
        }
        else if (this.point > 0) {
            return HungerCondition.Ok;
        }
        else if (this.point <= 0) {
            return HungerCondition.Full;
        }
    };
    Cat.prototype.receive_action = function (action, food) {
        if (food === void 0) { food = null; }
        if (this.point >= 100) {
            return CatAction.Hesitate;
        }
        else {
            switch (action) {
                case OwnerAction.Ask:
                    return this.answer();
                case OwnerAction.Fooding:
                    return this.eat(food);
                case OwnerAction.Play:
                    return this.play();
                default:
                    return CatAction.NoIdea;
            }
        }
    };
    return Cat;
}());
exports.Cat = Cat;
//# sourceMappingURL=index.js.map