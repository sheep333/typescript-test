"use strict";
exports.__esModule = true;
var chai = require("chai");
var index_js_1 = require("../index.js");
describe('UserUtilsのテスト', function () {
    var CAT_NAME_1 = "しーちゃん";
    var CAT_POINT_1 = 1;
    var CAT_NAME_2 = "キャンちゃん";
    var CAT_POINT_2 = 2;
    function ask_hunger(target, play_num) {
        for (var i = 0; i < play_num; i++) {
            target.receive_action(index_js_1.OwnerAction.Play);
        }
        return target.receive_action(index_js_1.OwnerAction.Ask);
    }
    it(CAT_NAME_2 + 'に2回遊んで結果を聞く', function () {
        var target2_test1 = new index_js_1.Cat(CAT_NAME_2, CAT_POINT_2);
        chai.assert.equal(ask_hunger(target2_test1, 2), index_js_1.HungerCondition.Ok, 'target1 play twice is Ok condition');
    });
    it(CAT_NAME_2 + 'に3回遊んで結果を聞く', function () {
        var target2_test2 = new index_js_1.Cat(CAT_NAME_2, CAT_POINT_2);
        chai.assert.equal(ask_hunger(target2_test2, 3), index_js_1.HungerCondition.Ok, 'target1 play twice is Ok condition');
    });
    it(CAT_NAME_1 + 'と' + CAT_NAME_2 + 'に5回遊んで結果を聞く', function () {
        var target1_test1 = new index_js_1.Cat(CAT_NAME_1, CAT_POINT_1);
        var target2_test3 = new index_js_1.Cat(CAT_NAME_2, CAT_POINT_2);
        chai.assert.equal(ask_hunger(target1_test1, 5), index_js_1.HungerCondition.Ok, 'target1 play twice is Ok condition');
        chai.assert.equal(ask_hunger(target2_test3, 5), index_js_1.HungerCondition.Ok, 'target1 play twice is Ok condition');
    });
    it(CAT_NAME_1 + 'に9回遊んで結果を聞く', function () {
        var target1_test2 = new index_js_1.Cat(CAT_NAME_1, CAT_POINT_1);
        chai.assert.equal(ask_hunger(target1_test2, 9), index_js_1.HungerCondition.Ok, 'target1 play twice is Ok condition');
    });
    it(CAT_NAME_1 + 'に10回遊んで結果を聞く', function () {
        var target1_test3 = new index_js_1.Cat(CAT_NAME_1, CAT_POINT_1);
        chai.assert.equal(ask_hunger(target1_test3, 10), index_js_1.HungerCondition.Ok, 'target1 play twice is Ok condition');
    });
    it('存在しないユーザーの場合', function () {
        var target1 = new index_js_1.Cat(CAT_NAME_1, CAT_POINT_1);
        var target2 = new index_js_1.Cat(CAT_NAME_2, CAT_POINT_2);
        chai.assert.throws(function () { target1.receive_action(index_js_1.OwnerAction.Ask); }, Error, 'not found!');
    });
});
//# sourceMappingURL=test.js.map