function cup_counter(cup) {
    let bonus_cup = 6;
    console.log(cup);
    if (cup < bonus_cup) {
        cup = bonus_cup - (cup % bonus_cup);  /// сколько кружек еще нужно
        console.log("сколько кружек еще нужно")
    } else {
        cup = cup % bonus_cup; // сколько кружек еще нужно
        if (cup == 0) {
            console.log("выдать бесплатный напиток");
        } else {
            console.log("сколько еще нужно заказать до б/н");
        }
    }
    console.log(cup);
    return cup
}

// cup_counter(6);

export default cup_counter;