function santasHoliday(input) {
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];


    let price = 0;

    switch (room) {
        case `room for one person`:
            price = (days - 1) * 18.00;
            break;

        case `apartment`:
            price = (days - 1) * 25.00;
            if (days < 10) {
                price = price * 0.70;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.65;
            } else {
                price = price * 0.50;
            }
            break;

        case `president apartment`:
            price = (days - 1) * 35.00;
            if (days < 10) {
                price = price * 0.90;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.85;
            } else {
                price = price * 0.80;
            }

    }

    if (grade === `positive`) {
        price = price * 1.25;
    } else {
        price = price * 0.90;
    }
    console.log(price.toFixed(2));
}

santasHoliday([`14`, `apartment`, `positive`])

