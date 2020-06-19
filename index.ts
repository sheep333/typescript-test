export enum Foods{
    SeaChiken,
    CatFood
}

export enum OwnerAction{
    Fooding,
    Play,
    Ask
}

export enum EatAction{
    Eat = "むしゃむしゃ",
    OverEat = "そんなに食べられないにゃ",
    CanNotEat = "ちゃんとした食べ物をよこすにゃ"
}

export enum HungerCondition{
    Hungry = "ハラヘリ",
    Ok = "まだ大丈夫",
    Full = "お腹いっぱいにゃ"
}

export enum CatAction{
    Fun = "ごろにゃーん",
    Hesitate = "ぎゃーーーす",
    NoIdea = "なにかにゃ？"
}

// 猫クラス
export class Cat {
    name: string
    num: number
    hunger_point: number

    constructor(theName: string, theNum: number){
        this.name = theName;
        this.num = theNum;
        this.hunger_point = 0;
    }

    play(): string{
        this.hunger_point += 10 * this.num;
        return CatAction.Fun;
    }

    eat(food: Foods): EatAction{
        if (this.hunger_point < 0) {
            return EatAction.OverEat;
        } else if (food == Foods.SeaChiken) {
            this.hunger_point = 0;
            return EatAction.Eat;
        } else if (food == Foods.CatFood){
            this.hunger_point -= 40;
            return EatAction.Eat;
        } else {
            return EatAction.CanNotEat;
        }
    }

    answer(): string{
        if(this.hunger_point >= 60){
            return HungerCondition.Hungry;
        } else if (this.hunger_point > 0){
            return HungerCondition.Ok;
        } else if (this.hunger_point <= 0){
            return HungerCondition.Full;
        }
    }

    receive_action(action: OwnerAction, food: Foods = null): string{
        if (this.hunger_point >= 100){
            // 100ポイント以上なら否応無しに暴れる
            return CatAction.Hesitate;
        } else {
            // オーナーの行動によって変更
            switch(action){
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
    }
}
