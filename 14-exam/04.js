function grandpaStavri(input) {

    let index = 0;
    let days = Number(input[0]);
    index++;
    let quantity = 0;
    let degrees = 0;

    for (let i = 0; i < days; i++) {
        let sumQuantity = Number(input[index]);
        index++;
        let sumDegrees = Number(input[index]);
        index++;

        totalDegrees = sumDegrees * sumQuantity;

        quantity += sumQuantity;
        degrees += totalDegrees;

    }

    let ave = degrees / quantity;

    console.log(`Liter: ${quantity.toFixed(2)}`);
    console.log(`Degrees: ${ave.toFixed(2)}`)

    
    if (ave < 38) {
        console.log(`Not good, you should baking!`);
    } else if (ave >= 38 && ave <= 42) {
        console.log(`Super!`);
    } else if (ave > 42) {
        console.log(`Dilution with distilled water!`);
    }

}


grandpaStavri(["3","100","45","50","55","150","36"])
