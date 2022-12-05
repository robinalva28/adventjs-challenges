// ##################################### First adventjs Challenge ##########################################
const gifts = ['cat', 'game', 'socks']
function wrapping(gifts: Array<string>):string[] {
    const result = []
  
    for(let i = 0; i< gifts.length; i++){
      const paper = '*'.repeat(gifts[i].length+2);
      const giftWrapped = `${paper}\n*${gifts[i]}*\n${paper}`;
      result.push(giftWrapped);
    }
    return result
  }
//console.log(wrapping(gifts));

// ##################################### Second adventjs Challenge ##########################################

const year = 2022;
function countHours(year: number, holidays: string[]): number {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let extraHours = 0;

    for (let i = 0; i < holidays.length; i++) {
        const { 0: month, 1: day } = holidays[i].split('/');
        let currentDate = new Date(`${year}/${month}/${day}`);
        if (currentDate.getDay() >= 1 && currentDate.getDay() <= 5) {
            extraHours += 2;
            console.log(`${holidays[i]} is ${monthNames[currentDate.getMonth()]} ${day}, ${dayNames[currentDate.getDay()]}. Count.`);
        } else {
            console.log(`${holidays[i]} is ${monthNames[currentDate.getMonth()]} ${day}, ${dayNames[currentDate.getDay()]}. Do not count.`);
        }
    }
    return extraHours;
}
const holidays = ['01/06', '04/01', '12/25'];
//console.log(countHours(year, holidays));

// ##################################### Third adventjs Challenge ##########################################

//The maximun capacity of each reindeers is equal to twice the number of letters in its name
function distributeGifts(packOfGifts: Array<string>, reindeers: Array<string>): number {
    let validIfLenghtsAreUpThanZero = (elem: Array<string>): number => {
        return elem.filter(elem => elem.length <= 0).length
    }
    if (validIfLenghtsAreUpThanZero(packOfGifts) || validIfLenghtsAreUpThanZero(reindeers)) {
        console.log(`wrong names`);
        return -1;
    }

    let maxCantOfPacks = 0;
    let packWeight = packOfGifts.reduce((i, j) => i + j).length;
    let reindeersCap = reindeers.map(r => (r.length * 2)).reduce((i, j) => i + j);

    maxCantOfPacks = Math.round((reindeersCap / packWeight) - 0.5);

    return maxCantOfPacks;
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer", ""]
// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
//console.log(distributeGifts(packOfGifts, reindeers));