function excursion(input) {

    let numOfPeople = Number(input[0]);
    let numNights = Number(input[1]);
    let transportCardsCount = Number(input[2]);
    let museumTicketsCount = Number(input[3]);

    let nightsPerPerson = numNights * 20;
    let transportCards = transportCardsCount * 1.60;
    let museumTicket = museumTicketsCount * 6


    let sumPerPerson = nightsPerPerson + transportCards + museumTicket;
    let sumForGroup = sumPerPerson * numOfPeople;
    let finalSum = sumForGroup * 1.25

    console.log(finalSum.toFixed(2))

}
excursion([`20`, `14`, `30`, `6`])