import { assert } from "chai";

import { Cat, CatAction, Foods, OwnerAction, HungerCondition } from '../index';

describe('UserUtilsのテスト', () => {
    const CAT_NAME_1 = "しーちゃん"
    const CAT_POINT_1 = 1

    const CAT_NAME_2 = "キャンちゃん"
    const CAT_POINT_2 = 2

    //***** ハラヘリ度が正しいかをテスト *****//
    // ハラヘリ度を尋ねる
    function ask_hunger(target: Cat, play_num: number): string {
        for (let i = 0; i < play_num; i++) {
            target.receive_action(OwnerAction.Play);
        }
        return target.receive_action(OwnerAction.Ask);
    }

    it(CAT_NAME_1 + 'と' + CAT_NAME_2 + 'に一番最初に状態を聞く', () => {
        let target1_test = new Cat(CAT_NAME_1, CAT_POINT_1);
        let target2_test = new Cat(CAT_NAME_2, CAT_POINT_2);

        assert.equal(ask_hunger(target1_test, 0), HungerCondition.Full, 'target1 play twice is Ok condition');
        assert.equal(ask_hunger(target2_test, 0), HungerCondition.Full, 'target1 play twice is Ok condition');
    });

    it(CAT_NAME_2 + 'に2回遊んで結果を聞く', () => {
        let target2_test1 = new Cat(CAT_NAME_2, CAT_POINT_2);

        assert.equal(ask_hunger(target2_test1, 2), HungerCondition.Ok, 'target1 play twice is Ok condition');
    });

    it(CAT_NAME_2 + 'に3回遊んで結果を聞く', () => {
        let target2_test2 = new Cat(CAT_NAME_2, CAT_POINT_2);

        assert.equal(ask_hunger(target2_test2, 3), HungerCondition.Hungry, 'target1 play twice is Ok condition');
    });

    it(CAT_NAME_1 + 'と' + CAT_NAME_2 + 'に5回遊んで結果を聞く', () => {
        let target1_test1 = new Cat(CAT_NAME_1, CAT_POINT_1);
        let target2_test3 = new Cat(CAT_NAME_2, CAT_POINT_2);

        assert.equal(ask_hunger(target1_test1, 5), HungerCondition.Ok, 'target1 play twice is Ok condition');
        assert.equal(ask_hunger(target2_test3, 5), CatAction.Hesitate, 'target1 play twice is Ok condition');
    });

    it(CAT_NAME_1 + 'に9回遊んで結果を聞く', () => {
        let target1_test2 = new Cat(CAT_NAME_1, CAT_POINT_1);

        assert.equal(ask_hunger(target1_test2, 9), HungerCondition.Hungry, 'target1 play twice is Ok condition');
    });

    it(CAT_NAME_1　+ 'に10回遊んで結果を聞く', () => {
        let target1_test3 = new Cat(CAT_NAME_1, CAT_POINT_1);

        assert.equal(ask_hunger(target1_test3, 10), CatAction.Hesitate, 'target1 play twice is Ok condition');
    });

    //***** 餌をあげてハラヘリポイントが正しいかをテスト *****//

    //***** 異常処理をテスト *****//
    /*it('存在しないユーザーの場合', () => {
        let target1 = new Cat(CAT_NAME_1, CAT_POINT_1);
        let target2 = new Cat(CAT_NAME_2, CAT_POINT_2);
        // Errorがthrowされることを確認
        assert.throws(() => { target1.receive_action(OwnerAction.Ask) }, Error, 'not found!');
    })*/
});
