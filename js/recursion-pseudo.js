function processDoll(doll) {

    // Базовый случай
    if ("нашли кусочек шоколада") {
        return "Ням-ням";
    } else if ("больше нету кукол") {
        return "Шоколад не найден"
    }
    // Рекурсивный вызов самой себя (функции)
    else {
        return processDoll("Кукла поменьше")
    }

}



