// ##################################### First adventjs Challenge ##########################################
// const gifts = ['cat', 'game', 'socks']
function wrapping(gifts: Array<string>):string[] {
   
    return gifts.map((gift) => {
        
        let wrap = '**'+'*'.repeat(gift.length);
        let giftWrapped = wrap+'\n*'+gift+'*\n'+wrap

        return giftWrapped;
    });
}
//console.log(wrapping(gifts));

// ##################################### Second adventjs Challenge ##########################################

function countHours(year: number, holidays: string[]): any {
    const getStringMessage = (date: Date): string => `${date.toISOString().substring(5, 10).replace('-', '/')} is ${date.toLocaleString('en', { month: 'long' })} ${date.toLocaleString('en', { day: 'numeric' })}, ${date.toLocaleString('en',{ weekday: 'long'})}`;

    let extraHours = 0;
    for (let holiday of holidays) {
        let date = new Date(`${year}/${holiday}`);
        if (date.getDay() >= 1 && date.getDay() <= 5) {
            extraHours += 2;
            console.log(getStringMessage(date).concat('. Count.'));
            continue;
        }
        console.log(getStringMessage(date).concat('. Do not count.'));
    }
    return extraHours;
}
// const year = 2022;
// const holidays = ['01/06', '04/01', '12/25'];
// console.log(countHours(year, holidays));

// ##################################### Third adventjs Challenge ##########################################

//The maximun capacity of each reindeers is equal to twice the number of letters in its name
function distributeGifts(packOfGifts: Array<string>, reindeers: Array<string>): number {
    let validIfLengthsAreUpThanZero = (elem: Array<string>): number => elem.filter(elem => elem.length <= 0).length;

    if (validIfLengthsAreUpThanZero(packOfGifts) || validIfLengthsAreUpThanZero(reindeers)) return -1;

    let packWeight = packOfGifts.reduce((i, j) => i + j).length;
    let reindeersCap = reindeers.map(r => (r.length * 2)).reduce((i, j) => i + j);

    return Math.round((reindeersCap / packWeight) - 0.5);
}

// const packOfGifts = ["book", "doll", "ball"]
// const reindeers = ["dasher", "dancer"]
// console.log(distributeGifts(packOfGifts, reindeers));

// ##################################### Fourth adventjs Challenge ##########################################

