"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var index_1 = require("../index");
describe('UserUtilsのテスト', function () {
    var CAT_NAME_1 = "しーちゃん";
    var CAT_POINT_1 = 1;
    var CAT_NAME_2 = "キャンちゃん";
    var CAT_POINT_2 = 2;
    function ask_hunger(target, play_num) {
        for (var i = 0; i < play_num; i++) {
            target.receive_action(index_1.OwnerAction.Play);
        }
        return target.receive_action(index_1.OwnerAction.Ask);
    }
    it(CAT_NAME_1 + 'と' + CAT_NAME_2 + 'に一番最初に状態を聞く', function () {
        var target1_test = new index_1.Cat(CAT_NAME_1, CAT_POINT_1);
        var target2_test = new index_1.Cat(CAT_NAME_2, CAT_POINT_2);
        chai_1.assert.equal(ask_hunger(target1_test, 0), index_1.HungerCondition.Full, 'target1 play twice is Ok condition');
        chai_1.assert.equal(ask_hunger(target2_test, 0), index_1.HungerCondition.Full, 'target1 play twice is Ok condition');
    });
    it(CAT_NAME_2 + 'に2回遊んで結果を聞く', function () {
        var target2_test1 = new index_1.Cat(CAT_NAME_2, CAT_POINT_2);
        chai_1.assert.equal(ask_hunger(target2_test1, 2), index_1.HungerCondition.Ok, 'target1 play twice is Ok condition');
    });
    it(CAT_NAME_2 + 'に3回遊んで結果を聞く', function () {
        var target2_test2 = new index_1.Cat(CAT_NAME_2, CAT_POINT_2);
        chai_1.assert.equal(ask_hunger(target2_test2, 3), index_1.HungerCondition.Hungry, 'target1 play twice is Ok condition');
    });
    it(CAT_NAME_1 + 'と' + CAT_NAME_2 + 'に5回遊んで結果を聞く', function () {
        var target1_test1 = new index_1.Cat(CAT_NAME_1, CAT_POINT_1);
        var target2_test3 = new index_1.Cat(CAT_NAME_2, CAT_POINT_2);
        chai_1.assert.equal(ask_hunger(target1_test1, 5), index_1.HungerCondition.Ok, 'target1 play twice is Ok condition');
        chai_1.assert.equal(ask_hunger(target2_test3, 5), index_1.CatAction.Hesitate, 'target1 play twice is Ok condition');
    });
    it(CAT_NAME_1 + 'に9回遊んで結果を聞く', function () {
        var target1_test2 = new index_1.Cat(CAT_NAME_1, CAT_POINT_1);
        chai_1.assert.equal(ask_hunger(target1_test2, 9), index_1.HungerCondition.Hungry, 'target1 play twice is Ok condition');
    });
    it(CAT_NAME_1 + 'に10回遊んで結果を聞く', function () {
        var target1_test3 = new index_1.Cat(CAT_NAME_1, CAT_POINT_1);
        chai_1.assert.equal(ask_hunger(target1_test3, 10), index_1.CatAction.Hesitate, 'target1 play twice is Ok condition');
    });
});
//# sourceMappingURL=test.js.map