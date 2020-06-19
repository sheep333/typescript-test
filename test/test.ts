import { assert } from "chai";

import { Cat, CatAction, Foods, OwnerAction, HungerCondition, EatAction } from '../index';

describe('UserUtilsのテスト', () => {
    //***** Cat Info *****//
    /** target1 **/
    const CAT_NAME_1 = "しーちゃん"
    const CAT_POINT_1 = 1
    /** target2 **/
    const CAT_NAME_2 = "キャンちゃん"
    const CAT_POINT_2 = 2

    //***** Common Method *****//
    function play_with_cat(target: Cat, play_num: number){
        for (let i = 0; i < play_num; i++) {
            target.receive_action(OwnerAction.Play);
        }
    }

    function ask_hunger(target: Cat, play_num: number): string {
        play_with_cat(target, play_num)
        return target.receive_action(OwnerAction.Ask);
    }

    function get_hunger_point(target: Cat, play_num: number, food: Foods): number {
        play_with_cat(target, play_num)
        target.receive_action(OwnerAction.Fooding, food);
        return target.hunger_point;
    }

    //***** Test Case *****//
    /** 遊んだあとのハラヘリポイントの判定が正しいかをテスト **/
    it(CAT_NAME_1 + 'と' + CAT_NAME_2 + 'に一番最初に状態を聞く', () => {
        let target1_case0 = new Cat(CAT_NAME_1, CAT_POINT_1);
        let target2_case0 = new Cat(CAT_NAME_2, CAT_POINT_2);

        assert.equal(ask_hunger(target1_case0, 0), HungerCondition.Full, 'target1 point under 0');
        assert.equal(ask_hunger(target2_case0, 0), HungerCondition.Full, 'target2 point under 0');
    });

    it(CAT_NAME_1 + 'に5回遊んで結果を聞く', () => {
        let target1_case1 = new Cat(CAT_NAME_1, CAT_POINT_1);

        assert.equal(ask_hunger(target1_case1, 5), HungerCondition.Ok, 'target1 after play 5th is Ok condition');
    });

    it(CAT_NAME_1 + 'に9回遊んで結果を聞く', () => {
        let target1_case2 = new Cat(CAT_NAME_1, CAT_POINT_1);

        assert.equal(ask_hunger(target1_case2, 9), HungerCondition.Hungry, 'target1 after play 9th is Hunger condition');
    });

    it(CAT_NAME_1 + 'に10回遊んで結果を聞く', () => {
        let target1_case3 = new Cat(CAT_NAME_1, CAT_POINT_1);

        assert.equal(ask_hunger(target1_case3, 10), CatAction.Hesitate, 'target1 after play 10th is Hesitate condition');
    });

    it(CAT_NAME_2 + 'に2回遊んで結果を聞く', () => {
        let target2_case1 = new Cat(CAT_NAME_2, CAT_POINT_2);

        assert.equal(ask_hunger(target2_case1, 2), HungerCondition.Ok, 'target2 after play 2th is Ok condition');
    });

    it(CAT_NAME_2 + 'に3回遊んで結果を聞く', () => {
        let target2_case2 = new Cat(CAT_NAME_2, CAT_POINT_2);

        assert.equal(ask_hunger(target2_case2, 3), HungerCondition.Hungry, 'target2 after play 3rd is Hunger condition');
    });

    it(CAT_NAME_2 + 'に5回遊んで結果を聞く', () => {
        let target2_case3 = new Cat(CAT_NAME_2, CAT_POINT_2);

        assert.equal(ask_hunger(target2_case3, 5), CatAction.Hesitate, 'target2 after play 5th is Hesitate condition');
    });

    /** 餌をあげてハラヘリポイントが正しいかをテスト **/
    it(CAT_NAME_1 + 'に5回遊んだあとシーチキンをあげる', () => {
        let target1_case4 = new Cat(CAT_NAME_1, CAT_POINT_1);
        assert.equal(get_hunger_point(target1_case4, 5, Foods.SeaChiken), 0, 'target1 eat SeaChiken');
    });

    it(CAT_NAME_1 + 'に6回遊んだあとキャットフードをあげる', () => {
        let target1_case5 = new Cat(CAT_NAME_1, CAT_POINT_1);
        assert.equal(get_hunger_point(target1_case5, 6, Foods.Snack), 20, 'target1 eat Snack');
    });

    it(CAT_NAME_2 + 'に3回遊んだあとシーチキンをあげる', () => {
        let target2_case4 = new Cat(CAT_NAME_2, CAT_POINT_2);
        assert.equal(get_hunger_point(target2_case4, 3, Foods.SeaChiken), 0, 'target2 eat SeaChiken');
    });

    it(CAT_NAME_2 + 'に3回遊んだあとキャットフードをあげる', () => {
        let target2_case5 = new Cat(CAT_NAME_2, CAT_POINT_2);
        assert.equal(get_hunger_point(target2_case5, 3, Foods.Snack), 20, 'target2 eat Snack');
    });

    /** 異常処理をテスト **/
    it('食べ過ぎのとき', () => {
        let target1_case6 = new Cat(CAT_NAME_1, CAT_POINT_1);
        assert.equal(target1_case6.receive_action(OwnerAction.Fooding, Foods.Snack), EatAction.Eat, 'eat food');
        assert.equal(target1_case6.receive_action(OwnerAction.Fooding, Foods.Snack), EatAction.OverEat, 'over eat');
    })
});
