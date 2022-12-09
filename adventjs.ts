// ##################################### First adventjs Challenge ##########################################
// const gifts = ['cat', 'game', 'socks']
function wrapping(gifts: Array<string>): string[] {

    return gifts.map((gift) => {

        let wrap = '**' + '*'.repeat(gift.length);
        let giftWrapped = wrap + '\n*' + gift + '*\n' + wrap

        return giftWrapped;
    });
}
//console.log(wrapping(gifts));

// ##################################### Second adventjs Challenge ##########################################

function countHours(year: number, holidays: string[]): any {
    let extraHours = 0;

    holidays.forEach((holiday) => {
        const numberDay = new Date(`${year}/${holiday}`).getDay();
        return numberDay !== 0 && numberDay !== 6 && (extraHours += 2);
    });

    return extraHours;
}
// const year = 2022;
// const holidays = ['01/06', '04/01', '12/25'];
// console.log(countHours(year, holidays));

// ##################################### Third adventjs Challenge ##########################################

//The maximun capacity of each reindeers is equal to twice the number of letters in its name
function distributeGifts(packOfGifts: Array<string>, reindeers: Array<string>): number {

    const packWeight = packOfGifts.reduce((i, j) => i + j).length;
    const reindeersCap = reindeers.map(r => (r.length * 2)).reduce((i, j) => i + j);

    return Math.floor(reindeersCap / packWeight);
}

// const packOfGifts = ["book", "doll", "ball"]
// const reindeers = ["dasher", "dancer"]
// console.log(distributeGifts(packOfGifts, reindeers));

// ##################################### Fourth adventjs Challenge ##########################################

