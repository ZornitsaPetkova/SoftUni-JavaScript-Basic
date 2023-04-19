function deerOfSanta(input) {

    let days = Number(input[0]);
    let food = Number(input[1]);
    let d1food = Number(input[2]);
    let d2food = Number(input[3]);
    let d3food = Number(input[4]);

    let foodFord1 = days * d1food;
    let foodFord2 = days * d2food;
    let foodFord3 = days * d3food;

    let foodForAll = foodFord1 + foodFord2 + foodFord3;
    let diff = Math.abs(food - foodForAll);

    if (food >= foodForAll) {

        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }
}

deerOfSanta([`2`, `10`, `1`, `1`, `2`])